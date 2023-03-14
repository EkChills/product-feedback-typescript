import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import AddFeedbackButton from "./ui/AddFeedbackButton"

const NavbarRoadmap = () => {
  const navigate = useNavigate()
  return (
    <nav className="flex items-center justify-between px-[1.5rem] lg:w-[100%] lg:space-x-[1.5rem]  py-[1.5rem] bg-[#373F68] md:rounded-md">
    <div className='flex flex-col space-y-1'>
    <button onClick={() => navigate(-1)} className="flex items-center space-x-[1rem]">
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#ffffff" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>        
        <p className="text-[#ffffff] font-bold text-[.8125rem] sm:text-[.875rem]">
            go back
          </p>
        </button>
        <h3 className="text-[1.125rem] sm:text-[1.5rem] font-bold text-[white]">Roadmap</h3>
    </div>
    <Link to={'/new-feedback'}><AddFeedbackButton>
          add feedback
        </AddFeedbackButton></Link>
  </nav>
  )
}

export default NavbarRoadmap