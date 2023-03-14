import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../types/hooks";
import ActiveLinks from "./ui/ActiveLinks";

const RoadmapPageLinks = () => {
  const {planned, inProgress, live} = useAppSelector((store) => store.productRequest)
  const [linksData, setLinksData] = useState([
    {id:1, text:'planned', data:planned},
    {id:2, text:'in-progress', data:inProgress},
    {id:3, text:'live', data:live}
  ])
  const [tab, setTab] = useState<string>('in-progress')

  const handleTabChange = (tabTitle:string) => {
    setTab(tabTitle)
  }

  return (
    <div className="flex items-center justify-between p-[1.5rem] border-b-2">
      {linksData.map((link) => <ActiveLinks tab={tab} onClick={() => handleTabChange(link.text)} key={link.id} text={link.text} linkArray={link.data} />)}
    </div>
  );
};

const WrapperPlanned = styled.span`
  
`

export default RoadmapPageLinks;
