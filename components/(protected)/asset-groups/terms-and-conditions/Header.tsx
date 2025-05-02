import { BackArrowUrlButton, BackButtonWrapper } from "@/components/Buttons";
import { ScrollText } from "lucide-react";

const Header = ({ asset }: { asset: string }) => {
  return (
    <div style={{ zIndex: 999 }} className="pb-[10px] sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="flex items-center gap-3">
          <BackButtonWrapper>
            <div className="flex items-center px-2">
              <BackArrowUrlButton url="" />
              <ScrollText />
            </div>
          </BackButtonWrapper>
          <span className="font-mono font-semibold text-turquoise-900 text-xl tracking-tight">
            Terms And Conditions
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
