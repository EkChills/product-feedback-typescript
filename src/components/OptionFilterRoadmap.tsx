import { useAppSelector } from "../types/hooks"
import { Link } from "react-router-dom"

const OptionFilterRoadmap = () => {
  const {planned, inProgress, live} = useAppSelector(store => store.productRequest)
  return (
    <div className='p-[1.5rem] bg-[#FFFFFF] flex flex-col space-y-[1.2rem] min-h-[11.125rem] rounded-lg'>
      <div className="flex items-center justify-between">
        <h5 className='text-[#3A4374] text-[1.125rem] font-bold capitalize'>roadmap</h5>
        <Link to="road-map"><span className='text-[#4661E6] hover:opacity-40 main-transition font-[600] text-[13px] underline capitalize'>view</span></Link>
      </div>
      <div className="flex flex-col space-y-[.5rem]">
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-[1rem]'>
          <span className='w-[.5rem] h-[.5rem] bg-[#F49F85] rounded-full'></span>
          <span className='text-[1rem] font-[400] text-[#647196] capitalize'>planned</span>
        </div>
        <span className='text-[1rem] text-[#647196] font-bold'>{planned.length}</span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-[1rem]'>
          <span className='w-[.5rem] h-[.5rem] bg-[#AD1FEA] rounded-full'></span>
          <span className='text-[1rem] font-[400] text-[#647196] capitalize'>in-progress</span>
        </div>
        <span className='text-[1rem] text-[#647196] font-bold'>{inProgress.length}</span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-[1rem]'>
          <span className='w-[.5rem] h-[.5rem] bg-[#F49F85] rounded-full '></span>
          <span className='text-[1rem] font-[400] text-[#647196] capitalize'>live</span>
        </div>
        <span className='text-[1rem] text-[#647196] font-bold'>{live.length}</span>
      </div>
      </div>
    </div>
  )
}

export default OptionFilterRoadmap