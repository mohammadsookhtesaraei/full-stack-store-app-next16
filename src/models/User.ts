import { Document, Schema, models, model } from "mongoose"



// interFace
interface UserSchemaType extends Document {
    email: string;
    password: string;
    role: string;
    createdAt: Date;
};



// create schema user model
const userSchema = new Schema<UserSchemaType>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "USER" },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});



// create user model

const User = models?.User || model<UserSchemaType>("User", userSchema);


export default User;



