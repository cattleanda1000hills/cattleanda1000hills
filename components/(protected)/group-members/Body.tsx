import ProfileInfoCard from "./ProfileInfoCard";
import { groupUsersInfos } from "@/data";

const Body = () => {
  return (
    <div className="relative h-screen">
      <div className="px-[20px] flex flex-col gap-3">
        {groupUsersInfos.map((p) => (
          <ProfileInfoCard {...p} key={p.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
