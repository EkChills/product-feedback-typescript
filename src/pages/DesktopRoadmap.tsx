import { useAppSelector } from "../types/hooks"
import MobileSuggestion from "../components/MobileSuggestion"

const DesktopRoadmap = () => {
  const {planned,live,inProgress} = useAppSelector((store) => store.productRequest)
  return (
    <div className="hidden md:grid grid-cols-3 gap-5 ">
          <div className="flex flex-col space-y-[1rem]">
            <div className="flex flex-col space-y-1 py-[1.5rem]">
              <h3 className="text-[1.125rem] font-bold text-[#3A4374] capitalize">
                planned ({planned.length})
              </h3>
              <p className="text-[.8125rem] font-[400] text-[#647196]">
                Ideas prioritized for research
              </p>
            </div>
            {planned.map((plan) => (
              <MobileSuggestion key={plan.id} tabName={"planned"} {...plan} />
            ))}
          </div>
          <div className="flex flex-col space-y-[1rem]">
            <div className="flex flex-col space-y-1 py-[1.5rem]">
              <h3 className="text-[1.125rem] font-bold text-[#3A4374] capitalize">
                In-Progress ({inProgress.length})
              </h3>
              <p className="text-[.8125rem] font-[400] text-[#647196]">
                Currently being developed
              </p>
            </div>
            {inProgress.map((plan) => (
              <MobileSuggestion key={plan.id} tabName={"in-progress"} {...plan} />
            ))}
          </div>
          <div className="flex flex-col space-y-[1rem]">
            <div className="flex flex-col space-y-1 py-[1.5rem]">
              <h3 className="text-[1.125rem] font-bold text-[#3A4374] capitalize">
                live ({live.length})
              </h3>
              <p className="text-[.8125rem] font-[400] text-[#647196]">
                Released features
              </p>
            </div>
            {live.map((plan) => (
              <MobileSuggestion key={plan.id} tabName={"live"} {...plan} />
            ))}
          </div>
        </div>
  )
}

export default DesktopRoadmap