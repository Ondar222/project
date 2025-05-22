import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = () => {
  return (
    <section className="flex flex-col w-full max-w-[1140px] items-center gap-[30px] mx-auto py-8 md:py-10 px-4">
      <Card className="w-full bg-transparent border-none">
        <CardContent className="flex flex-col items-center gap-2.5 p-0">
          <h2 className="w-full mt-[-1.00px] [font-family:'Bebas_Neue',Helvetica] font-bold text-white text-[20px] sm:text-[48px] md:text-[64px] text-center tracking-[0] leading-normal">
            ГЕНЕРАЛЬНЫЙ ДИРЕКТОР,&nbsp;&nbsp;РУКОВОДИТЕЛЬ ПРОГРАММЫ
          </h2>
          <h3 className="w-full [font-family:'Gilroy-Bold',Helvetica] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] text-center tracking-[0] leading-normal">
            ВАСИЛЬЕВ ЕВГЕНИЙ ОЛЕГОВИЧ
          </h3>
        </CardContent>
      </Card>

      <div className="relative w-full max-w-[754px] aspect-square rounded-[30px] md:rounded-[60px] bg-[url(/desktop------.svg)] bg-cover bg-[50%_50%]" />
    </section>
  );
};
