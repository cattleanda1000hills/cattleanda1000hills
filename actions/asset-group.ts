"use server";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import UserAssetGroup from "@/models/user-asset-group";
import { Types } from "mongoose";
import { redirect } from "next/navigation";

export const addAssetGroup = async (assetGroupId: string) => {
  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  await dbConnect();
  try {
    await UserAssetGroup.create({
      assetGroupId,
      userId: new Types.ObjectId(userId),
    });
  } catch (err) {
    console.log("Error: ", err);
  }
  redirect("/dashboard");
};
