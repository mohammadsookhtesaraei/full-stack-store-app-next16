

// import next auth

import NextAuth from "next-auth";

// import credential provider
import Credentials from "next-auth/providers/credentials";


// database and user model
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

// verifyPassword from utils
import { verifyPassword } from "@/utils/auth";



export const { handlers, auth, signIn, signOut } = NextAuth({

    // jason web token
    session: {
        strategy: "jwt"
    },

    // provider
    providers: [Credentials({

        // credentials type
        credentials: {
            email: { label: "email", type: "email" },
            password: { label: "password", type: "password" },
        },

        // authorization data client
        authorize: async (credentials) => {
            
            // check type
            if (typeof credentials?.email !== "string" || typeof credentials?.password !== "string") {
                throw new Error("pleas enter valid email or password")
            }
             

            // check validation
            if (!credentials.email || !credentials.password) {
                throw new Error("pleas enter valid email or password")
            }
            
            // connect dataBase
            await connectDB();
             

            // search user in dataBase by email from client request
            const user = await User.findOne({ email: credentials.email });

            // validation
            if (!user) {
                throw new Error("please create an account from register form")
            };
            
            // password validation
            const isValid = await verifyPassword(
                credentials.password,
                user.password
            )
            
            // check password  true or false
            if (!isValid) {
                throw new Error("incorrect email or password")
            }
           

            // finally everything be ok return data user when login
            return {
                id: user._id,
                email: user.email
            }

        }
    })],

    // redirect 

  callbacks:{
    async redirect({baseUrl,url}){
     return `${baseUrl}`
    },

  
  },
 
//   page sigIn
    pages :{
        signIn:"/login"
    },
    
})