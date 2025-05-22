import React from "react";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap w-full max-w-[1140px] items-center gap-[20px_99px] mx-auto py-10">
      <img className="w-28 h-24" alt="Logo" src="/logo--1--1.svg" />

      <div className="flex flex-wrap items-center justify-between gap-[20px_98px] flex-1 grow">
        <div className="w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-white text-base">
          Время работы: Круглосуточно
        </div>

        <div className="inline-flex items-center gap-[5px]">
          <MapPinIcon className="w-6 h-6 text-white" />
          <div className="w-[85px] [font-family:'Gilroy-Medium',Helvetica] font-medium text-white text-base">
            г. Иваново
          </div>
        </div>

        <div className="inline-flex items-center gap-[5px]">
          <PhoneIcon className="w-6 h-6 text-white" />
          <div className="mt-[-1.00px] [font-family:'Gilroy-Bold',Helvetica] font-bold text-white text-xl">
            8 800 500 89 55З
          </div>
        </div>

        <Button className="px-[25px] py-[15px] rounded-[15px] [background:linear-gradient(135deg,rgba(140,208,186,1)_0%,rgba(0,155,125,1)_100%)]">
          <span className="[font-family:'Gilroy-Bold',Helvetica] font-bold text-white text-sm">
            Срочный вызов врача
          </span>
        </Button>
      </div>
    </footer>
  );
};
