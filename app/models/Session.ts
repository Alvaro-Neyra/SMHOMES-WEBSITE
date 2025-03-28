import mongoose, { Schema, Document, Types } from "mongoose";

export interface ISession extends Document {
    adminId: Types.ObjectId;
    ip: string;
    userAgent: string;
    createdAt: Date;
}

const SessionSchema = new Schema<ISession>({
    adminId: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    ip: { type: String, required: true },
    userAgent: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Session || mongoose.model<ISession>("Session", SessionSchema);
