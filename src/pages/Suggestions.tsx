import Navbar from "../components/Navbar";
import RoadmapNav from "../components/RoadmapNav";
import { createPortal } from "react-dom";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import SuggestionsList from "../components/SuggestionsList";

const Suggestions = () => {
  return (
    <div className="  bg-[#F7F8FD] min-h-[100vh] flex flex-col sm:px-[2.44rem] lg:pt-[5.875rem] lg:w-[100vw] lg:px-[4rem]  lg:space-x-[1.95rem] lg:items-start lg:flex-row ">
      <RoadmapNav />
      {createPortal(<Sidebar />, document.getElementById('root') as HTMLElement)}
      <Wrapper>
        <Navbar />
        <SuggestionsList />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`


@media only screen and (min-width: 1024px) {
  width: calc(100% - 15.938rem);
}

`

export default Suggestions;
