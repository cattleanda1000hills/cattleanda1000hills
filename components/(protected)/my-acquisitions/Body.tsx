import ProfileInfoCard from "./ProfileInfoCard";
import { acquisitionInfos } from "@/data";

const Body = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="px-[20px] flex flex-col gap-3">
        {acquisitionInfos.map((p) => (
          <ProfileInfoCard {...p} key={p.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
