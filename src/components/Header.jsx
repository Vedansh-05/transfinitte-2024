import { arrowbl, arrowwh, numbersvg, tfbadge } from "../assets";
import { toast } from "sonner";
import { Button } from "./ui/button";
import Flip from "./Flip";
import React, { memo, useCallback } from 'react';

const Header = () => {
  const handleClick = useCallback(() => {
    toast("Coming Soon", {
      description: "Tuesday, 8 October 2024, 9:00 AM",
      style: {
        backgroundColor: "#EDEDED",
        color: "#000",
        padding: "16px",
      },
      className: "font-spacemono"
    });
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <MobileHeader handleClick={handleClick} />
      <DesktopHeader handleClick={handleClick} />
    </div>
  );
};

const MobileHeader = memo(({ handleClick }) => (
  <div className="block sm:hidden relative">
    <div className="flex items-center justify-between bg-black shrink-0 w-full border-b-[#EDEDED26] border-b border-solid py-4 px-8 sticky top-0 shadow-md z-50 content-stretch">
      <img src={tfbadge} alt="TF Badge" loading="lazy" />
      <Button variant="outline" onClick={handleClick}>
        <div className="flex flex-row gap-1 justify-center items-center bg-offwhite px-2 py-0 rounded-full hover:underline decoration-black">
          <div className="text-black text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase bg-offwhite">
            REGISTER
          </div>
          <div>
            <img src={arrowbl} className="max-w-none w-fit bg-offwhite" alt="Arrow" loading="lazy" />
          </div>
        </div>
      </Button>
    </div>
  </div>
));

const DesktopHeader = memo(({ handleClick }) => (
  <div className="hidden sm:flex justify-between items-center h-max py-5 bg-black shrink-0 self-stretch border-b-[#EDEDED26] border-b border-solid pl-12 sticky top-0 shadow-md z-50 content-stretch">
    <div className="w-[15vw]">
      <Flip />
    </div>
    <div className="flex flex-row flex-grow gap-1 self-stretch items-center justify-center">
      <div className="text-white text-center text-xl font-spacegrotesk items-center font-medium leading-5 tracking-[-0.1px] uppercase">
        Transfinitte
      </div>
      <div>
        <a>
          <img src={numbersvg} alt="24" loading="lazy" />
        </a>
      </div>
    </div>
    <div className="w-fit h-fit flex gap-[36px] mr-[3rem] justify-center items-center">
      <a
        href="https://www.instagram.com/tc_nitt/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline decoration-white"
      >
        <button className="flex flex-row gap-1 justify-center items-center">
          <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
            INSTAGRAM
          </div>
          <div>
            <img src={arrowwh} className="max-w-none w-fit" alt="Arrow" loading="lazy" />
          </div>
        </button>
      </a>
      <Button variant="outline" onClick={handleClick}>
        <div className="flex flex-row gap-1 justify-center items-center bg-offwhite px-5 py-2 rounded-full hover:underline decoration-black">
          <div className="text-black text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase bg-offwhite">
            REGISTER
          </div>
          <div>
            <img src={arrowbl} className="max-w-none w-fit bg-offwhite" alt="Arrow" loading="lazy" />
          </div>
        </div>
      </Button>
    </div>
  </div>
));

export default Header;