import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface UserAssetGroup extends Document {
  userId: Types.ObjectId;
  assetGroupId: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserAssetGroupSchema = new Schema<UserAssetGroup>(
  {
    assetGroupId: {
      type: Schema.Types.ObjectId,
      ref: "AssetGroup",
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const UserAssetGroup: Model<UserAssetGroup> =
  mongoose.models.UserAssetGroup ||
  mongoose.model<UserAssetGroup>("UserAssetGroup", UserAssetGroupSchema);

export default UserAssetGroup;
