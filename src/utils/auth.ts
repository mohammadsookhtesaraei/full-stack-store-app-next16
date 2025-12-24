import {hash,compare} from "bcrypt"


// hash password


export async function hashPassword(password:string){
    const hashedPassword=await hash(password,12);
    return hashedPassword;

};// use this function in register api


// verify password from database and client together


export async function verifyPassword(password:string,hashedPassword:string) {
   const isValid=await compare(password,hashedPassword);
   return isValid; 
   
}// use in next auth credential