import React from "react";
import NextContribution from "./NextContribution";
import ProfileInfoCard from "./ProfileInfoCard";

const Body = ({ asset }: { asset: string }) => {
  return (
    <div className="px-[20px] flex flex-col gap-[20px] overflow-x-hidden">
      <ProfileInfoCard name="Group Contribution:" text="R16 000" />
      <NextContribution asset={asset} />
      <ProfileInfoCard name="My Contribution:" text="R6 000" />
      <ProfileInfoCard
        name="My Acquisition:"
        text="0"
        url={`/my-acquisitions?asset=${asset}`}
      />
      <ProfileInfoCard name="Acquisition Month:" text="June" />
      <ProfileInfoCard
        name="Cycle Members:"
        text="12"
        url={`/group-members?asset=${asset}`}
      />
    </div>
  );
};

export default Body;
