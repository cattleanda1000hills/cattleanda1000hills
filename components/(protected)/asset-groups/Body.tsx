import { getAvailableAssetGroups } from "@/data/asset-group";
import AssetCards from "./AssetCards";
import { div } from "motion/react-client";

const Body = async () => {
  const assetGroups = await getAvailableAssetGroups();

  return (
    <div className="px-[20px] pb-[40px] flex flex-col gap-[20px] overflow-x-hidden">
      {assetGroups && assetGroups.length > 0 ? (
        assetGroups.map(({ id, name, cycleMonths, monthlyPayment }) => (
          <AssetCards {...{ id, name, cycleMonths, monthlyPayment }} key={id} />
        ))
      ) : (
        <div className="text-turquoise-600">
          No New available Asset Group...{" "}
        </div>
      )}
    </div>
  );
};

export default Body;
