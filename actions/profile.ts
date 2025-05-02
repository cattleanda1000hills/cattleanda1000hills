"use server";
import { redirect } from "next/navigation";
import {
  createProfileFormSchema,
  CreateProfileFormState,
} from "@/definitions/profile";
import Profile from "@/models/profile";
import { Types } from "mongoose";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";

export async function createProfile(
  prevState: CreateProfileFormState | undefined,
  formData: FormData
) {
  const validatedFields = createProfileFormSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    const state: CreateProfileFormState = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Oops, I think there's a mistake with your inputs.",
    };
    return state;
  }

  const {
    fullName,
    surname,
    idPassportNo,
    dateOfBirth,
    contactNumber,
    email,
    countryOfOrigin,
  } = validatedFields.data;

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  await dbConnect();
  
  try {
    await Profile.create({
      fullName,
      surname,
      idPassportNo,
      dateOfBirth,
      contactNumber,
      email,
      countryOfOrigin,
      userId: new Types.ObjectId(userId),
    });
  } catch (error) {
    throw new Error("Error creating user profile:" + error);
  }

  redirect("/asset-groups");
}
