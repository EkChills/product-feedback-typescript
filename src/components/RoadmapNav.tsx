import styled from "styled-components";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";
import { openSidebar } from "../features/userSlice";
import { closeSidebar } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../types/hooks";
import OptionFilterSection from "./OptionFilterSection";
import OptionFilterRoadmap from "./OptionFilterRoadmap";

const RoadmapNav = (): JSX.Element => {
  const {isSidebarOpen} = useAppSelector((store) => store.user)
  const dispatch = useDispatch()
  return (
    <>
      <Wrapper className="flex items-center sm:hidden justify-between p-[1.5rem] back-drop ">
        <div className="flex flex-col space-y-1 text-white">
          <h5 className="capitalize text-[.94rem] font-bold">
            frontend mentor
          </h5>
          <h5 className="capitalize text-[.815rem] font-[500]">
            frontend mentor
          </h5>
        </div>
        {isSidebarOpen ? <img src={close} alt="close" className="cursor-pointer" onClick={() => dispatch(closeSidebar())} /> :  <img src={hamburger} alt="hamburger menu" className="cursor-pointer" onClick={() => dispatch(openSidebar())} />}
      </Wrapper>
      <TabWrapper className=" items-center hidden sm:flex space-x-[.645rem] mt-[56px] mb-[40px] lg:flex-col lg:space-x-0 lg:space-y-[1.5rem] lg:mt-0 lg:w-[15.938rem]">
        <div className="w-1/3 flex flex-col log-img min-h-[11.125rem] lg:w-full rounded-lg p-[1.5rem]">
          <h5 className="text-[1.25rem] mt-auto font-bold text-white capitalize">frontend mentor</h5>
          <h6 className="text-[.95rem]  font-[500] text-white capitalize">feedback board</h6>
        </div>
        <div className="w-1/3 lg:w-full">
          <OptionFilterSection />
        </div>
        <div className="w-1/3 lg:w-full">
          <OptionFilterRoadmap />
        </div>
      </TabWrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: url(../assets/suggestions/mobile/background-header.png);
  background-position: center;
  background-size: cover;
`;

const TabWrapper = styled.div`
  .log-img {
    background: url('../assets/suggestions/tablet/background-header.png');
    background-position: center;
    background-size: cover;
  }
`

export default RoadmapNav;
