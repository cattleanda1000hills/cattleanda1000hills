import { BackArrowUrlButton, BackButtonWrapper } from "@/components/Buttons";
import { User } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div style={{ zIndex: 999 }} className="sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-1">
            <BackButtonWrapper>
              <div className="flex items-center px-2">
                <BackArrowUrlButton url={""} />
                <User />
              </div>
            </BackButtonWrapper>
            <span className="font-mono font-semibold text-turquoise-900 text-xl">
              User Profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
