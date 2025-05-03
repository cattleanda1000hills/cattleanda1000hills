import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import AssetGroup from "@/models/asset-group";
import UserAssetGroup from "@/models/user-asset-group";
import { Types } from "mongoose";
import { cache } from "react";

export const getAvailableAssetGroups = async () => {
  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  await dbConnect();

  // Groups user belongs to.
  const userAssetGroups = await UserAssetGroup.find(
    {
      userId: new Types.ObjectId(userId),
    },
    "assetGroupId"
  );

  const assetGroupIds = userAssetGroups.map(
    (assetGroup) => assetGroup.assetGroupId
  );

  // Checks groups user does not belong to and check if group still open
  const assetGroups = await AssetGroup.find({
    _id: { $nin: assetGroupIds },
    dueDate: { $gt: new Date() },
  });

  return assetGroups.map(({ _id, name, cycleMonths, monthlyPayment }: any) => ({
    id: _id,
    name,
    cycleMonths,
    monthlyPayment,
  }));
};

export const getAssetGroupMembers = async (assetGroupId: string) => {
  const session = await verifySession();
  if (!session) return null;

  await dbConnect();
  return await UserAssetGroup.find({
    assetGroupId: new Types.ObjectId(assetGroupId),
  }).populate("userId");
};

export const getNumberOfAssetGroupMember = async (assetGroupId: string) => {
  const session = await verifySession();
  if (!session) return null;

  await dbConnect();
  return await UserAssetGroup.countDocuments({
    assetGroupId: new Types.ObjectId(assetGroupId),
  });
};

export const getAssetGroupsForUser = async () => {
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
};

export const getAssetGroupsForUserById = async (assetGroupId: string) => {
  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  await dbConnect();

  const response = await UserAssetGroup.findOne({
    userId: new Types.ObjectId(userId),
    assetGroupId: new Types.ObjectId(assetGroupId),
  }).populate("assetGroupId", "_id name monthlyPayment cycleMonths");

  if (!response) return null;
  const userAssetGroup = response as any;
  const assetGroup = userAssetGroup.assetGroupId as any;

  return {
    id: assetGroup._id.toString(),
    monthSlot: response.monthSlot,
    assetGroup: {
      id: assetGroup._id.toString(),
      name: assetGroup.name,
      monthlyPayment: assetGroup.monthlyPayment,
      cycleMonths: assetGroup.cycleMonths,
    },
  };
};

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
