import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DollarSign } from "lucide-react";

const AssetCards = ({
  id,
  name,
  cycleMonths,
  monthlyPayment,
}: {
  id: string;
  name: string;
  cycleMonths: number;
  monthlyPayment: number;
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="shadow-xl relative w-full bg-turquoise-100 rounded-3xl px-4 py-4 md:py-4 overflow-hidden">
        <div className="flex flex-col h-full gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <div
                className={`flex justify-center items-center bg-pinklet-300 w-[35px] h-[35px] rounded-full`}
              >
                <Image
                  src="/calendar.svg"
                  height={20}
                  width={20}
                  alt="calendar"
                />
              </div>
              <div className="flex justify-between w-4/5">
                <p className="font-sans text-turquoise-900 text-base">
                  Next Contribution:
                </p>
                <p className="font-sans text-turquoise-900 text-base font-bold">
                  May
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <div
                className={`flex justify-center items-center bg-pinklet-300 w-[35px] h-[35px] rounded-full`}
              >
                <DollarSign size={20} />
              </div>
              <div className="flex justify-between w-4/5">
                <p className="font-sans text-turquoise-900 text-base">
                  Monthly Contribution:
                </p>
                <p className="font-sans text-turquoise-900 text-base font-bold">
                  R {monthlyPayment}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* Revisit next contribution url "next-contribution?assetId=${id}" */}
            <Link
              className="flex items-center mx-auto bg-turquoise-500 hover:bg-turqoise-700 text-white rounded-2xl w-[140px] h-[30px]"
              href={`/group-contribution?assetId=${id}&name=${name}`}
            >
              <p className="text-center w-full text-base">View Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCards;
