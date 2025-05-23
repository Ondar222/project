import React from "react";
import { DivByAnima } from "./sections/DivByAnima/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import { TreatmentComponent } from "./sections/Element1ByAnima/TreatmentComponent";
import { AssistanceComponent } from "./sections/Element2ByAnima/AssistanceComponent";
import { RehabPrograms } from "./sections/Element3ByAnima/RehabPrograms";
import { ElementWrapperByAnima } from "./sections/ElementWrapperByAnima/ElementWrapperByAnima";
import { HeaderByAnima } from "./sections/HederByAnima/HederByAnima";
import OverlapWrapperByAnima from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
import { TermsContainer } from "./sections/SectionComponentNodeByAnima/TermsContainer";
import { Footer } from "./sections/Footer/Footer";
import { RoutineComponents } from "./RoutineComponents/RoutineComponents";
import { AchievementsComponents } from "./AchievementsComponents/AchievementsComponents";
import { DispensaryComponent } from "./DispensaryComponent/DispensaryComponent";
import { UserCard } from "./UserCard/UserCard";

export const MacbookAir = () => {
  return (
    <div className="bg-[#19342a] flex flex-row justify-center w-full">
      <div className="bg-[#19342a] overflow-hidden w-[1280px] relative">
        <div className="relative w-full">
          {/* Header Section */}
          <HeaderByAnima />

          {/* Main Content Sections */}
          <OverlapWrapperByAnima />
          <RehabPrograms />
          <AssistanceComponent />
          <TreatmentComponent />
          <TermsContainer />

          <RoutineComponents />
          <AchievementsComponents />

          <DivByAnima />
          <DivWrapperByAnima />
          <ElementWrapperByAnima />

          <DispensaryComponent />
          <UserCard />
          <Footer />
        </div>
      </div>
    </div>
  );
};
