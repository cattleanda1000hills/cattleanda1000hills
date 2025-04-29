import { BackButtonWrapper } from "@/components/Buttons";
import { ArrowLeft, BriefcaseBusiness, Users } from "lucide-react";

const Header = () => {
  return (
    <div style={{ zIndex: 999 }} className="pb-[20px] sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="flex items-center gap-3">
          <BackButtonWrapper>
            <div className="flex items-center px-2">
              <ArrowLeft
                className="text-pinklet-500"
                size={22}
                strokeWidth={3}
              />
              <BriefcaseBusiness size={20} />
            </div>
          </BackButtonWrapper>
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            Asset Details
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
