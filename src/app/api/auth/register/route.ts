import { NextResponse, NextRequest } from "next/server";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import { hashPassword } from "@/utils/auth";


export async function POST(request: NextRequest) {
    try {
        
        // connect to dataBase
        await connectDB();
        
        // get Data  from client request
        const { email, password } = await request.json();
        

        // validation Data
        if (!email || !password) {
            return NextResponse.json({ error: "invalid Data!" }, { status: 422 })
        };
        
        // check email in dataBase
        const isExitingUser = await User.findOne({ email });
        if (isExitingUser) {
            return NextResponse.json({ error: "before use this email try new email or login" }, { status: 422 })
        };
        

        // hashPassword
        const hashedPassword = await hashPassword(password);
        

        // create new user and added to DataBase
        const newUser = await User.create({
            email: email,
            password: hashedPassword
        });

        console.log(newUser);
        return NextResponse.json({ message: "created account successfully" }, { status: 201 });

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 })
        }

        return NextResponse.json({ message: "server error 500" }, { status: 500 })
    }
}