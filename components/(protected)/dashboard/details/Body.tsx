import AssetCards from "./AssetCards";
import ProfileInfoCard from "./ProfileInfoCard";
import {
  getAssetGroupsForUserById,
  getNumberOfAssetGroupMember,
} from "@/data/asset-group";

const Body = async ({ assetId }: { assetId: string }) => {
  const userGroup = await getAssetGroupsForUserById(assetId);

  const numberOfAssetGroupMember =
    (await getNumberOfAssetGroupMember(assetId)) + "";

  if (!userGroup) return null;
  const { monthSlot } = userGroup;

  return (
    <div className="px-[20px] flex flex-col gap-[20px] overflow-x-hidden">
      {/* <ProfileInfoCard name="Group Contribution:" text="R16 000" /> */}
      <AssetCards {...userGroup.assetGroup} />
      <ProfileInfoCard name="My Contribution:" text="R 0" />
      <ProfileInfoCard
        name="My Acquisition:"
        text="0"
        // url={`/my-acquisitions?assetId=${assetId}`}
      />
      <ProfileInfoCard name="Acquisition Month:" text={monthSlot} />
      <ProfileInfoCard
        name="Asset Group Members:"
        text={numberOfAssetGroupMember}
        // url={`/group-members?assetId=${assetId}`}
      />
    </div>
  );
};

export default Body;
