import { TermsAndConditions } from "@/components/Buttons";
import { ArrowUp10, CalendarDays } from "lucide-react";
import PaymentDetails from "./PaymentDetails";

const Body = ({ asset }: { asset: string }) => {
  const assetObj = {
    monthlyPayment: 2195.83,
    monthPaymentDescription:
      "Cow Agrade: R1145.83,House Rent: R300,Shepherd: R170,Monthly Insurance: R29.17,Monthly Bale Feed: R400,Co-op contribution: R50,Vet: R100",
    onceOffPayment: 350,
    onceOffPaymentDescription: "Bull Rental: R280, RFID Microchip: R70",
    name: "Cow Agrade",
    cycleMonths: 12,
  };

  return (
    <>
      <div className="flex flex-col h-full gap-6 rounded-t-[50px] bg-turquoise-50 py-8">
        <PaymentDetails
          title="Monthly Payment"
          total={assetObj.monthlyPayment}
          paymentDetails={assetObj.monthPaymentDescription}
          Icon={CalendarDays}
        />
        <PaymentDetails
          title="Onceoff Payment"
          total={assetObj.onceOffPayment}
          paymentDetails={assetObj.onceOffPaymentDescription}
          Icon={ArrowUp10}
        />
        <TermsAndConditions asset={asset} />
      </div>
    </>
  );
};

export default Body;
