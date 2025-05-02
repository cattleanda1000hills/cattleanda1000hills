import type { IProfile } from "@/definitions/profile";
import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface Profile extends Document, IProfile {
  userId: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProfileSchema = new Schema<Profile>(
  {
    fullName: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    surname: { type: String, required: true },
    idPassportNo: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String },
    countryOfOrigin: { type: String, required: true },
  },
  { timestamps: true }
);

const Profile: Model<Profile> =
  mongoose.models.Profile || mongoose.model<Profile>("Profile", ProfileSchema);

export default Profile;
