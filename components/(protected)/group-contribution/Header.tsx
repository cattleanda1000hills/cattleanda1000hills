import { BackButtonWrapper } from "@/components/Buttons";
import { ArrowLeft, Users } from "lucide-react";

const Header = ({ asset }: { asset: string }) => {
  const url = `/next-contribution?asset=${asset}`;

  return (
    <div style={{ zIndex: 999 }} className="pb-[20px] sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="flex items-center gap-3">
          <BackButtonWrapper url={url}>
            <div className="flex items-center px-2">
              <ArrowLeft
                className="text-pinklet-500"
                size={22}
                strokeWidth={3}
              />
              <Users size={20} />
            </div>
          </BackButtonWrapper>
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            June Contributions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
