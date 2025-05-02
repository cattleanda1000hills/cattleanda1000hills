import { getAssetGroups } from "@/data/asset-group";
import AssetCards from "./AssetCards";

const Body = async () => {
  const assetGroup = await getAssetGroups();

  return (
    <div className="px-[20px] pb-[40px] flex flex-col gap-[20px] overflow-x-hidden">
      {assetGroup.map(({ id, name, cycleMonths, monthlyPayment }) => (
        <AssetCards {...{ id, name, cycleMonths, monthlyPayment }} key={id} />
      ))}
    </div>
  );
};

export default Body;
