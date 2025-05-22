import React from "react";
import { Card, Button } from "antd";
import { PlayIcon } from "lucide-react";

export const DispensaryComponent = () => {
  return (
    <div className="flex flex-col w-full max-w-[1068px] items-center gap-10 mx-auto my-20">
      <h2 className="w-full [font-family:'Bebas_Neue',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-normal">
        НАРКОЛОГИЧЕСКИЙ РЕАБИЛИТАЦИОННЫЙ ЦЕНТР ЛЕЧЕНИЯ АЛКОГОЛИЗМА И НАРКОМАНИИ
      </h2>

      <Card className="relative w-[946px] h-[560px] bg-[#dbf7ee] rounded-[60px] overflow-hidden border-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="w-[120px] h-[120px] rounded-full bg-white/20 hover:bg-white/30"
          >
            <PlayIcon className="w-16 h-16 text-white" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
