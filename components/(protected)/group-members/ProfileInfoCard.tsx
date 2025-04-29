import { User } from "lucide-react";

const ProfileInfoCard = ({
  name,
  status,
}: {
  name: string;
  status: string;
}) => {
  return (
    <div className="rounded-2xl flex px-3 py-2 items-center justify-between bg-turquoise-100 group">
      <div className="flex gap-3 items-center">
        <div
          className={`flex justify-center items-center group-odd:bg-turquoise-200 group-even:bg-pinklet-200 w-[40px] h-[40px] rounded-xl`}
        >
          <User />
        </div>
        <span className="font-bold text-turquoise-900 leading-none">
          {name}
        </span>
      </div>
      <div className="py-1 px-3 border border-pinklet-300 rounded-2xl">
        <div className="font-bold text-turquoise-700 text-sm">{status}</div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
