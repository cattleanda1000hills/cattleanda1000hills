import ProfileInfoCard from "./ProfileInfoCard";
import { groupUsersInfos } from "@/data";
import { UploadPaymentDashboard } from "@/components/Buttons";

const Body = () => {
  return (
    <div className="relative md:h-[550px] h-screen">
      <div className="px-[20px] flex flex-col gap-3">
        {groupUsersInfos.map((p) => (
          <ProfileInfoCard {...p} key={p.name} />
        ))}
      </div>
      <div className="fixed md:-bottom-8 bottom-5 left-6 w-full md:absolute">
        <div className="md:w-[300px] w-full px-7">
          <UploadPaymentDashboard />
        </div>
      </div>
    </div>
  );
};

export default Body;
