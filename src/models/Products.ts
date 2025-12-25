import { Document, Schema, model, models, Types } from "mongoose";


interface ProductsSchemaTypes extends Document {
  
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
};


const productsSchema = new Schema<ProductsSchemaTypes>({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
}, { timestamps: true });



const Products = models?.Products || model<ProductsSchemaTypes>("Products", productsSchema);

export default Products;



