"use client";
import { MenuToggle } from "@/components/MenuToggle";
import { Navigation } from "@/components/Navigation";
import { Home, LogIn, SquareArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const [navHeight, setNavHeight] = useState(120);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);
  const navList = [
    { name: "Home", url: "/", Icon: Home, bgColor: "pinklet" },
    {
      name: "Sign Up",
      url: "/register",
      Icon: SquareArrowUp,
      bgColor: "turquoise",
    },
    { name: "Sign In", url: "/login", Icon: LogIn, bgColor: "pinklet" },
  ];

  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      backgroundColor: "#f1f9fa",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(14px at 85% 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);

      var time = setTimeout(() => {
        setZIndex(0);
        setNavHeight(120);
        clearTimeout(time);
      }, 500);
    } else {
      setZIndex(1);
      setNavHeight(400);
      setIsOpen(true);
    }
  };

  return (
    <div style={{ zIndex: 999 }} className="pb-[30px] sticky top-0">
      <div className="relative flex content-center justify-between bg-white py-5 px-[20px]">
        <div className="flex items-center">
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            Blissful Birth
          </span>
        </div>{" "}
        <div style={{ zIndex }} className="absolute -top-1 -right-1">
          <div
            className={`relative flex justify-end items-stretch flex-1 rounded-[20px] h-[${navHeight}px] w-[500px] max-w-full overflow-hidden`}
          >
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
              className="w-[300px]"
            >
              <div className="absolute top-4 right-6 w-[44px] h-[46px] rounded-2xl bg-white border shadow-lg shadow-turquoise-500 border-turquoise-200 rounded-2xl "></div>
              <motion.div
                className="w-[300px] absolute top-0 bottom-0 right-0 bg-white"
                variants={sidebarVariants}
              >
                <div className="absolute top-3 right-4 w-[60px] h-[60px] flex place-items-center">
                  <MenuToggle toggle={() => toggleMenu()} />
                </div>
              </motion.div>
              <Navigation navList={navList} />
            </motion.nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
