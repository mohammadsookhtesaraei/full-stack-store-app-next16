

import { NextResponse,NextRequest } from "next/server";

import connectDB from "@/utils/connectDB";
import Products from "@/models/Products";

import { ProductsType } from "@/types/products.type";

export async function GET(request:NextRequest){
  
 try {
        //  get search params from next url from request
    const {searchParams}= request.nextUrl;

    const category=searchParams.get("category");

     await connectDB();
     let allProducts:ProductsType[];

    if(category?.trim()) {
        allProducts=await  Products.find({category})
    }else {
        allProducts=await Products.find({})
    };
    return NextResponse.json(allProducts,{status:200})
 }catch(error:unknown){
    if(error instanceof Error){
        return NextResponse.json({message:error.message},{status:500})
    }

    return NextResponse.json({error:"unknown server error"},{status:500})
 }
}