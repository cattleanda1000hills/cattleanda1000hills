import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfileInfoCard = ({
  name,
  image,
  url,
  price,
}: {
  name: string;
  image: string;
  url: string;
  price: number;
}) => {
  return (
    <Link
      href={url}
      className="rounded-2xl flex px-3 py-2 items-center justify-between bg-turquoise-100 group"
    >
      <div className="flex gap-3 items-center">
        <div
          className={`flex justify-center items-center group-odd:bg-turquoise-200 group-even:bg-pinklet-200 w-[40px] h-[40px] rounded-xl`}
        >
          <Image className="" src={image} height={26} width={26} alt={image} />
        </div>
        <span className="font-bold text-turquoise-900 leading-none">
          {name}
        </span>
      </div>
      <div className="flex gap-2">
        <div className="font-bold text-turquoise-900">R {price}</div>
        <ChevronRight />
      </div>
    </Link>
  );
};

export default ProfileInfoCard;
