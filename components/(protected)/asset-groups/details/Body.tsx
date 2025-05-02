import { TermsAndConditions } from "@/components/Buttons";
import { ArrowUp10, CalendarDays } from "lucide-react";
import PaymentDetails from "./PaymentDetails";

const Body = ({ assetGroup }: { assetGroup: any }) => {
  return (
    <>
      <div className="flex flex-col h-full gap-6 rounded-t-[50px] bg-turquoise-50 py-8">
        <PaymentDetails
          title="Monthly Payment"
          total={assetGroup.monthlyPayment}
          paymentDetails={assetGroup?.monthPaymentDescription || ""}
          Icon={CalendarDays}
        />
        <PaymentDetails
          title="Onceoff Payment"
          total={assetGroup.onceOffPayment}
          paymentDetails={assetGroup?.onceOffPaymentDescription || ""}
          Icon={ArrowUp10}
        />
        <TermsAndConditions assetGroupId={assetGroup.id} />
      </div>
    </>
  );
};

export default Body;
