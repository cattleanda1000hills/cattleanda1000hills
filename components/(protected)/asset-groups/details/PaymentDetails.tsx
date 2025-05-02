const PaymentDetails = ({
  paymentDetails,
  title,
  total,
  Icon,
}: {
  paymentDetails: string;
  title: string;
  total: number;
  Icon: any;
}) => {
  const strArr = paymentDetails.split(",");
  return (
    <div className="group">
      <div className="flex items-center gap-4 px-7">
        <div className="w-[40px]">
          <div className="flex justify-center items-center group-even:bg-turquoise-300 group-odd:bg-pinklet-300 w-[45px] h-[45px] rounded-full">
            <Icon />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-mono font-bold text-lg text-turquoise-950">
            {title}
          </span>
        </div>
      </div>
      <div className="border border-t-turquoise-100 my-3"></div>
      <div className="flex flex-col gap-1 px-7">
        {strArr.map((paymentDetails, key) => {
          const [description, price] = paymentDetails.split(":");
          return (
            <div className="flex justify-between" key={key}>
              <span className="font-sans text-turquoise-700">
                {description}
              </span>
              <span className="font-sans font-bold text-turquoise-800">
                {price}
              </span>
            </div>
          );
        })}
      </div>
      <div className="px-7">
        <div className="border border-t-turquoise-300 my-1 w-full"></div>
        <div className="flex justify-between">
          <span className="font-sans text-turquoise-700">{title} Total</span>
          <span className="font-sans font font-bold text-turquoise-800">
            R {total}
          </span>
        </div>{" "}
      </div>
    </div>
  );
};

export default PaymentDetails;
