import dbConnect from "@/lib/db";
import AssetGroup from "@/models/asset-group";
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

export const getAssetGroup = cache(async (id: string) => {
  await dbConnect();
  return await AssetGroup.findById(id);
});
