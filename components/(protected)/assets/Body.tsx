import ProfileInfoCard from "./ProfileInfoCard";
import { assetVariantsInfos } from "@/data";

const Body = ({ asset }: { asset: any }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="px-[20px] flex flex-col gap-3">
        {assetVariantsInfos(asset).map((p) => (
          <ProfileInfoCard {...p} key={p.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
