import {
  BriefcaseBusiness,
  ChevronRight,
  CircleDollarSign,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Body = ({ asset }: { asset: string }) => {
  const cycleData = [
    { title: "Name of Buyer ", value: "Suzzane Jest", Icon: User },
    {
      title: "Cost of Asset",
      value: "R11 500",
      Icon: CircleDollarSign,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center h-[230px]">
        <div className="bg-transparent flex w-100 justify-center mb-6">
          <div className="flex flex-col w-100 items-center justify-center">
            <div className="p-6 rounded-full border-8 border-turquoise-300 mb-4">
              <Image
                className=""
                src="/user_1.svg"
                height={4}
                width={80}
                alt="BlissfulLogo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-8 flex flex-col">
        {cycleData.map(({ title, value, Icon }, index) => (
          <div className="group" key={index}>
            <div className="flex gap-4 px-7">
              <div className="w-[40px]">
                <div className="flex justify-center items-center group-even:bg-turquoise-200 group-odd:bg-pinklet-200 w-[45px] h-[45px] rounded-full">
                  <Icon />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-turquoise-950">{title}:</span>
                <p className="font-mono font-bold text-turquoise-900">
                  {value}
                </p>
              </div>
            </div>
            <div className="border border-t-turquoise-100 my-3"></div>
          </div>
        ))}
        <div className="w-full px-7 ">
          <Link
            className={`flex items-center mx-auto justify-center gap-3 bg-pinklet-500 hover:bg-pinklet-700 text-white rounded-full w-full h-[35px]`}
            href="/assets/details"
          >
            <BriefcaseBusiness size={20} />
            <p className="text-center">Asset Details</p>
            <ChevronRight size={20} />
          </Link>
        </div>{" "}
        <div className="w-full px-7 ">
          <Link
            className={`flex items-center mx-auto justify-center gap-3 bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-full h-[35px]`}
            href={`/group-contribution?asset=${asset}`}
          >
            <Users size={20} />
            <p className="text-center">Group Contributions</p>
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Body;
