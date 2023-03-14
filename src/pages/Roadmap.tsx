import NavbarRoadmap from "../components/NavbarRoadmap";
import RoadmapPageLinks from "../components/RoadmapPageLinks";
import { useState } from "react";
import { useAppSelector } from "../types/hooks";
import Suggestion from "../components/Suggestion";


const Roadmap = () => {
  const [tab, setTab] = useState<string>('in-progress')
  const {planned, suggestions, inProgress, live} = useAppSelector((store) => store.productRequest)

  const handleTabChange = (tabTitle:string) => {
    setTab(tabTitle)
  }

  return (
    <>
       <NavbarRoadmap />
       <div className=" bg-[#F7F8FD] min-h-[100vh] w-full">
        <RoadmapPageLinks tab={tab} handleTabChange={handleTabChange} />
        <div className="px-[1.5rem] flex-col space-y-[1rem]">
          {tab === 'planned' ? <>
          <div className="flex flex-col space-y-1 py-[1.5rem]">
            <h3 className="text-[1.125rem] font-bold text-[#3A4374] capitalize">planned ({planned.length})</h3>
            <p className="text-[.8125rem] font-[400] text-[#647196]">Ideas prioritized for research</p>
          </div>
            {planned.map((plan) => <Suggestion key={plan.id} tabName={tab} {...plan} />)}
          </> : tab == 'in-progress' ? <>
          <div className="flex flex-col space-y-1 py-[1.5rem] ">
            <h3 className="text-[1.125rem] font-bold text-[#3A4374] capitalize">in-Progress ({inProgress.length})</h3>
            <p className="text-[.8125rem] font-[400] text-[#647196]">Features currently being developed</p>
          </div>
            {inProgress.map((feedback) => <Suggestion key={feedback.id} {...feedback} tabName={tab} />)}
          </> : <>
          <div className="flex flex-col space-y-1 py-[1.5rem]">
            <h3 className="text-[1.125rem] font-bold text-[#3A4374] capitalize">live ({live.length})</h3>
            <p className="text-[.8125rem] font-[400] text-[#647196]">Released features</p>
          </div>
            {live.map((feedback) => <Suggestion key={feedback.id} {...feedback} tabName={tab} />)}
          </>}
        </div>
       </div>
    </>
  )
}

export default Roadmap