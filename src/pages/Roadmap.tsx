import NavbarRoadmap from "../components/NavbarRoadmap";
import RoadmapPageLinks from "../components/RoadmapPageLinks";
import { useState } from "react";
import { useAppSelector } from "../types/hooks";
import Suggestion from "../components/Suggestion";
import MobileRoadmap from "./MobileRoadmap";
import MobileSuggestion from "../components/MobileSuggestion";
import DesktopRoadmap from "./DesktopRoadmap";

const Roadmap = () => {
  const [tab, setTab] = useState<string>("in-progress");
  const { planned, suggestions, inProgress, live } = useAppSelector(
    (store) => store.productRequest
  );

  const handleTabChange = (tabTitle: string) => {
    setTab(tabTitle);
  };

  return (
    <div className="md:px-[3rem] min-h-[100vh] bg-[#F7F8FD] md:py-[5rem] lg:px-[7rem] xl:px-[10rem]">
      <NavbarRoadmap />
      <div className="">
        <RoadmapPageLinks
          tab={tab}
          handleTabChange={handleTabChange}
          className="md:hidden"
        />
        <MobileRoadmap
          tab={tab}
          live={live}
          inProgress={inProgress}
          planned={planned}
          className="md:hidden"
        />
        <DesktopRoadmap />
      </div>
    </div>
  );
};

export default Roadmap;
