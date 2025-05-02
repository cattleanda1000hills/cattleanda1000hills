import { IAssetGroup } from "@/definitions/asset-group";
import mongoose, { Schema, Document, Model } from "mongoose";

export interface AssetGroup extends Document, IAssetGroup {
  createdAt?: Date;
  updatedAt?: Date;
}

const AssetGroupSchema = new Schema<AssetGroup>(
  {
    name: { type: String, required: true },
    dueDate: { type: Date, required: true },
    cycleMonths: { type: Number, required: true },
    monthlyPayment: { type: Number, required: true },
    monthPaymentDescription: { type: String, required: true },
    onceOffPayment: { type: Number, required: true },
    onceOffPaymentDescription: { type: String, required: true },
  },
  { timestamps: true }
);

const AssetGroup: Model<AssetGroup> =
  mongoose.models.AssetGroup ||
  mongoose.model<AssetGroup>("AssetGroup", AssetGroupSchema);

export default AssetGroup;
