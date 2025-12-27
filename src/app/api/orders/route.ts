import { NextResponse, NextRequest } from "next/server";
import Order from "@/models/Order";
import connectDB from "@/utils/connectDB";




export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const { cart, totalPrice, user } = await request.json();


        if (
            !user ||
            !cart
        ) {
            return NextResponse.json(
                { message: "invalid data" },
                { status: 422 }
            );
        }

        const newOrder = await Order.create({
            user,
            cart,
            totalPrice,
            status: "pending"
        });


        return NextResponse.json(
            {
                message:"order accept successfully",
                status: newOrder.status,
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 })
        }
        return NextResponse.json({ message: "unknown error server" }, { status: 500 })

    }
}