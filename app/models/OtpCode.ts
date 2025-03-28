import mongoose, { Schema, Document } from "mongoose";

export interface IOtpCode extends Document {
    email: string;
    code: string;
    expiresAt: Date;
}

const OtpCodeSchema = new Schema<IOtpCode>({
    email: { type: String, required: true, unique: true },
    code: { type: String, required: true },
    expiresAt: { type: Date, required: true },
});

OtpCodeSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 600 });

export default mongoose.models.OtpCode || mongoose.model<IOtpCode>("OtpCode", OtpCodeSchema);
