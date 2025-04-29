"use client";
import { ArrowUp10, CalendarDays, CircleDollarSign } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Body = ({ asset }: { asset: string }) => {
  const cycleData = [
    { title: "Monthly Cycle", value: "12 Months", Icon: CalendarDays },
    {
      title: `${asset} Monthly Contribution`,
      value: "R10 000",
      Icon: CircleDollarSign,
    },
    { title: `${asset} Upkeep Fee`, value: "R1 500", Icon: CircleDollarSign },
    {
      title: `Total ${asset} Contribution`,
      value: "R11 500",
      Icon: CircleDollarSign,
    },
    {
      title: "Monthly Group Contribution",
      value: "R24 000",
      Icon: CircleDollarSign,
    },
    {
      title: `Monthly ${asset} Acquisition`,
      value: "1",
      Icon: ArrowUp10,
    },
  ];
  const [isCheckBox, setIsCheckBox] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-8 flex flex-col">
        {cycleData.map(({ title, value, Icon }, index) => (
          <div className="group" key={index}>
            <div className="flex gap-4 px-7">
              <div className="w-[40px]">
                <div className="flex justify-center items-center group-even:bg-turquoise-300 group-odd:bg-pinklet-300 w-[45px] h-[45px] rounded-full">
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
          <div className="flex gap-3 mb-3 items-center">
            <input
              onClick={() => setIsCheckBox(!isCheckBox)}
              id="tAndCs"
              type="checkbox"
              className="rounded-md border border-turquiose-200"
            />
            <label htmlFor="tAndCs">Agree to Terms & Conditions</label>
          </div>
          <Link
            className={`flex items-center mx-auto justify-center gap-3 ${
              isCheckBox
                ? "bg-turquoise-500 hover:bg-turquoise-700"
                : "bg-gray-400 hover:bg-gray-600"
            } text-white rounded-full w-full h-[35px]`}
            href={isCheckBox ? `/assets?asset=${asset}` : "#"}
          >
            <p className="text-center">Add Asset</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Body;
