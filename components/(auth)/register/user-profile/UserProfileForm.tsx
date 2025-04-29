import { BackButton, NextButton } from "@/components/Buttons";
import Input from "@/components/Input";
import { userProfileInputDetails } from "@/data";

const UserProfileForm = () => {
  return (
    <div className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-7 md:overflow-scroll">
      <div className="w-full mb-2">
        {userProfileInputDetails.map((detail, index) => (
          <Input key={index} {...detail} />
        ))}
      </div>
      <div className="flex gap-3">
        <BackButton />
        <NextButton url="/asset-groups" />
      </div>
    </div>
  );
};

export default UserProfileForm;
