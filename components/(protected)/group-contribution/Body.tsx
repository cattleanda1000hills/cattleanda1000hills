import ProfileInfoCard from "./ProfileInfoCard";
import { groupUsersInfos } from "@/data";
import { UploadPaymentDashboard } from "@/components/Buttons";

const Body = async ({ assetId }: { assetId: string }) => {
  const isAvailable = false;
  return (
    <div className="relative h-screen">
      <div className="px-[20px] flex flex-col gap-3">
        {!isAvailable ? (
          <div className="text-turquoise-700">No payment available</div>
        ) : (
          groupUsersInfos.map((p) => <ProfileInfoCard {...p} key={p.name} />)
        )}
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
