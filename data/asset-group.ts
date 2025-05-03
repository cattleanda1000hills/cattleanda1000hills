import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import AssetGroup from "@/models/asset-group";
import UserAssetGroup from "@/models/user-asset-group";
import { Types } from "mongoose";
import { cache } from "react";

export const getAssetGroups = cache(async () => {
  await dbConnect();
  const assetGroups = await AssetGroup.find({ dueDate: { $gt: new Date() } });

  return assetGroups.map(({ _id, name, cycleMonths, monthlyPayment }: any) => ({
    id: _id,
    name,
    cycleMonths,
    monthlyPayment,
  }));
});

export const getAssetGroupsForUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  await dbConnect();

  const userGroups = await UserAssetGroup.find({
    userId: new Types.ObjectId(userId),
  }).populate("assetGroupId", "_id name monthlyPayment cycleMonths");

  return userGroups.map((ug) => {
    const group = ug.assetGroupId as any;
    return {
      id: group._id.toString(),
      name: group.name,
      monthlyPayment: group.monthlyPayment,
      cycleMonths: group.cycleMonths,
    };
  }); // Returns an array of group objects
});

export const getAssetGroup = cache(async (id: string) => {
  await dbConnect();
  const response = await AssetGroup.findById(id);
  if (!response) return null;

  const {
    _id,
    name,
    monthlyPayment,
    monthPaymentDescription,
    onceOffPayment,
    onceOffPaymentDescription,
    cycleMonths,
    dueDate,
  } = response;

  return {
    id: _id?.toString(),
    name,
    monthlyPayment,
    monthPaymentDescription,
    onceOffPayment,
    onceOffPaymentDescription,
    cycleMonths,
    dueDate,
  };
});
