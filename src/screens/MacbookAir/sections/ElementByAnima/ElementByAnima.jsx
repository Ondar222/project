import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ElementByAnima = () => {
  return (
    <section className="w-full max-w-[1140px] h-auto py-16 bg-[#dbf7ee] rounded-[60px] overflow-hidden">
      <div className="flex flex-row h-full">
        <div className="flex flex-col w-full md:w-[475px] px-[95px] justify-center space-y-5">
          <p className="[font-family:'Gilroy-Medium',Helvetica] font-medium text-[#1a352b] text-base">
            Пожалуйста, укажите номер телефона,
            <br />
            чтобы мы могли с вами связаться.
          </p>

          <Card className="bg-white rounded-[20px] shadow-[0px_0px_20px_#0000001a] border-none">
            <CardContent className="flex items-center justify-between gap-10 p-5">
              <div className="flex items-center gap-[5px]">
                <PhoneIcon className="w-6 h-6 text-[#1a352b]" />
                <span className="[font-family:'Gilroy-Medium',Helvetica] font-medium text-[#1a352b] text-xl">
                  +7(____) ____ - __ -___
                </span>
              </div>

              <Button className="px-[25px] py-[15px] rounded-[15px] [background:linear-gradient(135deg,rgba(140,208,186,1)_0%,rgba(0,155,125,1)_100%)]">
                <span className="[font-family:'Gilroy-Bold',Helvetica] font-bold text-white text-sm">
                  Заказать звонок
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="hidden md:block w-[725px] h-full">
          <img
            className="w-full h-full object-cover"
            alt="Image"
            src="/image-6.png"
          />
        </div>
      </div>
    </section>
  );
};
