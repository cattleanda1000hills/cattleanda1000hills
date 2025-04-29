import AssetCards from "./AssetCards";

const Body = () => {
  const assetGroupData = [
    { asset: "Cow", cycleLength: 12, groupMonthlyContribution: 12000 },
    { asset: "Goat", cycleLength: 12, groupMonthlyContribution: 5000 },
    { asset: "Chicken", cycleLength: 12, groupMonthlyContribution: 1000 },
  ];
  
  return (
    <div className="px-[20px] pb-[40px] flex flex-col gap-[20px] overflow-x-hidden">
      {assetGroupData.map((a) => (
        <AssetCards {...a} key={a.asset} />
      ))}
    </div>
  );
};

export default Body;
