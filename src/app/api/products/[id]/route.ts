import { NextRequest, NextResponse } from "next/server";

import connectDB from "@/utils/connectDB";
import Products from "@/models/Products";


interface ParamsType {
    params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: ParamsType) {

    try {
        const { id } = await params;
    
        await connectDB();

        const product = await Products.findById({ _id: id });
        if (!product) {
            return NextResponse.json({ message: "product not found" }, { status: 422 });
        };

        return NextResponse.json(product, { status: 200 })

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
        return NextResponse.json({ message: "unknown error server" }, { status: 500 })

    }

};