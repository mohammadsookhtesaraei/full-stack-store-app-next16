
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/libs/auth.config";


export async function proxy(request:NextRequest){

const url=request.nextUrl.clone();

const session=await auth();

const publicPaths=["/login","/register"];
const protectedPaths=["/dashboard"];

// if user not login
if(!session?.user && protectedPaths.some((path)=>url.pathname.startsWith(path))){
    url.pathname="/login"
    return NextResponse.redirect(url)
};

// if user is login
if(session?.user && publicPaths.some((path)=>url.pathname.startsWith(path))){
    url.pathname="/dashboard"
    return NextResponse.redirect(url)
};

return NextResponse.next();
};


export const config={
    matcher:["/dashboard/:path*","/login","/register"]
}