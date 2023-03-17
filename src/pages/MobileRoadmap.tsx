import { ProductRequest } from '../types/storeTypes'
import Suggestion from '../components/Suggestion'
import React from 'react';

interface Props  {
  tab:string;
  planned:ProductRequest[];
  inProgress:ProductRequest[];
  live:ProductRequest[];
  className?:string;
}

const MobileRoadmap = ({tab,planned,inProgress,live,className}:Props) => {
  return (
    <div className={`px-[1.5rem] flex-col space-y-[1rem] ${className}`}>
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
  )
}

export default MobileRoadmap