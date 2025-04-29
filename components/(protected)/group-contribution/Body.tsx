import ProfileInfoCard from "./ProfileInfoCard";
import { groupUsersInfos } from "@/data";
import { UploadPaymentDashboard } from "@/components/Buttons";

const Body = () => {
  return (
    <div className="relative h-screen">
      <div className="px-[20px] flex flex-col gap-3">
        {groupUsersInfos.map((p) => (
          <ProfileInfoCard {...p} key={p.name} />
        ))}
      </div>
      <div className="fixed bottom-5 w-full ">
        <div className="w-full px-7">
          <UploadPaymentDashboard />
        </div>
      </div>
    </div>
  );
};

export default Body;
