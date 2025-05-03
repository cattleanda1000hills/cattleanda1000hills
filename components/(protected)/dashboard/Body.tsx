import Link from "next/link";
import AssetCards from "./AssetCards";
import { BriefcaseBusiness, Plus } from "lucide-react";
import { getAssetGroupsForUser } from "@/data/asset-group";

const Body = async () => {
  const userAssetGroups = await getAssetGroupsForUser();

  if (!userAssetGroups) return null;

  return (
    <div className="px-[20px] pb-[40px] flex flex-col gap-[20px] overflow-x-hidden">
      {userAssetGroups && userAssetGroups.length > 0 ? (
        userAssetGroups.map((a) => <AssetCards {...a} key={a.id} />)
      ) : (
        <div className="text-turquoise-600">
          No new Asset Group Available!!!
        </div>
      )}
      <div className="w-full px-7 ">
        <Link
          className={`flex items-center mx-auto justify-center gap-3 bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-full h-[35px]`}
          href={`/asset-groups`}
        >
          <BriefcaseBusiness size={20} />
          <p className="text-center">Add Asset Group</p>
          <Plus size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Body;
