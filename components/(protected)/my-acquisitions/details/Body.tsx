import { CalendarDays, CircleDollarSign } from "lucide-react";
import Image from "next/image";

const Body = () => {
  const cycleData = [
    { title: "Variance ", value: "African Limousine", Icon: CalendarDays },
    { title: "Gender ", value: "Female", Icon: CalendarDays },
    {
      title: "Cost",
      value: "R11 500",
      Icon: CircleDollarSign,
    },
    {
      title: "Administration Fee",
      value: "R1 500",
      Icon: CircleDollarSign,
    },
  ];

  return (
    <>
      <div>
        <div className="bg-transparent flex w-100 justify-center">
          <div className="flex flex-col w-100 items-center justify-center">
            <div className="p-6 rounded-full border-8 border-turquoise-300 mb-4">
              <Image
                className=""
                src="/cow_logo.png"
                height={4}
                width={80}
                alt="BlissfulLogo"
              />
            </div>
            <h3 className="font-mono font-semibold mb-6 md:text-3xl text-center text-4xl text-turquoise-900 w-100">
              Cow
            </h3>
          </div>
        </div>{" "}
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
        </div>
      </div>
    </>
  );
};

export default Body;
