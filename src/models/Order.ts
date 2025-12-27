import { Document, Schema, models, model } from "mongoose"







interface UserInfoSchemaType {
    name: string;
    email: string;
    city: string;
    country: string;
    address: string;
    zipCode: string;
};


interface CartSchemaType {
    _id: string
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    quantity: number;
};

interface OrderSchemaTypes extends Document {
    user: UserInfoSchemaType;
    cart: CartSchemaType[];
    totalPrice: number;
    status: "pending" | "paid" | "shipped" | "cancelled";
    createdAt: Date;
    updatedAt: Date;
};

const userinFoSchema = new Schema<UserInfoSchemaType>({

    name: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    zipCode: { type: String, required: true },


}, { _id: false });


const cartSchema = new Schema<CartSchemaType>({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },

}, { _id: false });


const orderSchema = new Schema<OrderSchemaTypes>({
    user: { type: userinFoSchema, required: true },
    cart: { type: [cartSchema], required: true },
    totalPrice: { type: Number, required: true },
    status: {
        type: String,
        enum: ["pending", "paid", "shipped", "cancelled"],
        default: "pending",
    },
}, { timestamps: true });

const Order = models?.Order || model<OrderSchemaTypes>("Order", orderSchema);
export default Order;







