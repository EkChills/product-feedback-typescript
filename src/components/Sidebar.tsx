import { useAppSelector } from "../types/hooks"
import OptionFilterRoadmap from "./OptionFilterRoadmap"
import OptionFilterSection from "./OptionFilterSection"

const Sidebar = ():JSX.Element => {
  const {isSidebarOpen} = useAppSelector((store) => store.user)
  const {inProgress,planned, live, filterOptions} = useAppSelector((store) => store.productRequest)
  return (
   <div className={`fixed top-[6rem] sm:hidden bg-black bottom-0  ${isSidebarOpen ? 'bg-opacity-25 visible' : 'bg-opacity-0 invisible'} left-0 right-0`}>
    <div className="w-[71%] flex flex-col space-y-[1.5rem] p-[1.5rem] bg-[#F7F8FD] h-[100%] ml-auto">
      <OptionFilterSection />
      <OptionFilterRoadmap />
    </div>
   </div>
  )
}

export default Sidebar