"use server";
import { monthNames } from "@/data";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import AssetGroup from "@/models/asset-group";
import UserAssetGroup from "@/models/user-asset-group";
import { Types } from "mongoose";
import { redirect } from "next/navigation";

export const addAssetGroup = async (assetGroupId: string) => {
  const session = await verifySession();
  if (!session) return null;

  await dbConnect();

  const userId = session?.userId as string;
  const groupObjectId = new Types.ObjectId(assetGroupId);
  const userObjectId = new Types.ObjectId(userId);

  try {
    const assetGroup = await AssetGroup.findById(assetGroupId);

    if (!assetGroup || !assetGroup.dueDate) {
      throw new Error("Asset group or due date not found");
    }

    const existing = await UserAssetGroup.findOne({
      userId: userObjectId,
      groupId: groupObjectId,
    });

    if (existing) {
      throw new Error("User is already in this group");
    }

    const groupStartMonth = new Date(assetGroup.dueDate).getMonth();
    const memberCount = await UserAssetGroup.countDocuments({
      assetGroupId: groupObjectId,
    });
    const nextAvailableSlot = (groupStartMonth + memberCount) % 12;

    await UserAssetGroup.create({
      assetGroupId: groupObjectId,
      userId: userObjectId,
      monthSlot: monthNames[nextAvailableSlot],
    });
  } catch (err) {
    console.log("Error: ", err);
    throw new Error("User is already in this group");
  }
  redirect("/dashboard");
};
