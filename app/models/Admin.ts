import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IAdmin extends Document {
    username: string;
    password: string;
    email?: string;
}

const AdminSchema = new Schema<IAdmin>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
});

AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

AdminSchema.methods.comparePassword = async function (candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);
