import { ChevronRight, DollarSign } from "lucide-react";
import { div } from "motion/react-client";
import Link from "next/link";

const ProfileInfoCard = ({
  name,
  url,
  text,
}: {
  name: string;
  url?: string;
  text: string;
}) => {
  return (
    <Link
      href={url ? url : "#"}
      className="rounded-3xl flex p-3 items-center justify-between bg-turquoise-100 group"
    >
      <div className="flex gap-3 items-center">
        <div
          className={`flex justify-center items-center group-odd:bg-turquoise-200 group-even:bg-pinklet-200 w-[40px] h-[40px] rounded-xl`}
        >
          <DollarSign />
        </div>
        <span className="font-bold text-turquoise-900 leading-none">
          {name}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="font-bold text-turquoise-900">{text}</div>
        {url && (
          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-pinklet-200">
            <ChevronRight />
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProfileInfoCard;
