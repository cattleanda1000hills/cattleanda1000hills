import React from "react";
import Image from "next/image";
import Link from "next/link";

const NextContribution = ({ asset }: { asset: string }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="shadow-xl relative w-full bg-turquoise-100 rounded-2xl px-4 py-5 md:py-4 overflow-hidden">
        <div className="flex flex-col h-full gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <div
                className={`flex justify-center items-center bg-turquoise-200 bg-pinklet-200 w-[40px] h-[40px] rounded-full`}
              >
                <Image
                  src="/calendar.svg"
                  height={23}
                  width={23}
                  alt="calendar"
                />
              </div>
              <div className="flex justify-between w-4/5">
                <p className="font-sans text-turquoise-900 text-base">
                  Next Contribution:
                </p>
                <p className="font-sans text-turquoise-900 text-base font-bold">
                  June
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <div
                className={`flex justify-center items-center bg-turquoise-200 bg-pinklet-200 w-[40px] h-[40px] rounded-full`}
              >
                <Image
                  src="/birth_companion.png"
                  height={23}
                  width={23}
                  alt="calendar"
                />
              </div>
              <div className="flex justify-between w-4/5">
                <p className="font-sans text-turquoise-900 text-base">
                  Monthly Contribution:
                </p>
                <p className="font-sans text-turquoise-900 text-base font-bold">
                  R 1200
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Link
              className="flex items-center mx-auto bg-turquoise-500 hover:bg-turqoise-700 text-white rounded-2xl w-[140px] h-[30px]"
              href={`/next-contribution?asset=${asset}`}
            >
              <p className="text-center w-full text-base">View Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextContribution;
