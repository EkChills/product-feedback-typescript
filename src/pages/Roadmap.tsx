import NavbarRoadmap from "../components/NavbarRoadmap";
import RoadmapPageLinks from "../components/RoadmapPageLinks";


const Roadmap = () => {
  return (
    <>
       <NavbarRoadmap />
       <div className=" bg-[#F7F8FD] min-h-[100vh] w-full">
        <RoadmapPageLinks />
       </div>
    </>
  )
}

export default Roadmap