import { BackArrowUrlButton, BackButtonWrapper } from "@/components/Buttons";
import { BriefcaseBusiness } from "lucide-react";

const Header = ({ name }: { name: string }) => {
  const url = `/dashboard`;

  return (
    <div style={{ zIndex: 999 }} className="pb-[10px] sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-turquoise">
        <div className="flex items-center gap-3">
          <BackButtonWrapper url={url}>
            <div className="flex items-center px-2">
              <BackArrowUrlButton url="/name-groups" />
              <BriefcaseBusiness />
            </div>
          </BackButtonWrapper>
          <span className="font-mono font-semibold text-turquoise-900 text-xl tracking-tight">
            {name} Group
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
