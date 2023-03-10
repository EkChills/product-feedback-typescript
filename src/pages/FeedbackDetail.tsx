import {  useNavigate, useParams } from "react-router-dom";
import leftArrow from "../assets/shared/icon-arrow-left.svg";
import AddComment from "../components/AddComment";
import SingleComment from "../components/SingleComment";
import Suggestion from "../components/Suggestion";
import ActionButton from "../components/ui/ActionButton";
import { useAppSelector } from "../types/hooks";

const FeedbackDetail = () => {
  const {suggestions} = useAppSelector((store) => store.productRequest)
  const { id } = useParams<{ id?: number | string | any }>();
  const navigate = useNavigate()
  
  const singleSuggestion = suggestions.find((suggestion) => suggestion.id == id)!
  


  return (
    <div className="px-[1.5rem] bg-[#F7F8FD] sm:px-[2.5rem] pt-[2rem] sm:pt-[4rem] pb-[4rem] lg:px-[10rem] xl:px-[22.188rem] lg:pt-[5rem]">
      <div className="flex flex-col space-y-[1.5rem]">
        <div className="flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="flex items-center space-x-[1rem]">
            <img src={leftArrow} alt="back arrow icon" />
            <p className="text-[#647196] font-bold text-[.8125rem] sm:text-[.875rem]">
              go back
            </p>
          </button>
          <ActionButton id="edit button" className="capitalize bg-[#4661E6] hover:opacity-60 transition-all ease-out">
            edit feedback
          </ActionButton>
        </div>
        <Suggestion  {...singleSuggestion}  />
        <div className="flex flex-col bg-[#FFFFFF] p-[1.5rem] rounded-lg">
          <h2 className="text-[#3A4374] font-bold text-[1.125rem] capitalize">{singleSuggestion?.comments?.length} comments</h2>
          {singleSuggestion.comments && <div className="">
                {singleSuggestion.comments.map((comment) => {
                  return <SingleComment id={comment.id} content={comment.content} user={comment.user} replies={comment.replies}  mainId={id} />
                })}
            </div>}
        </div>
        <AddComment id={id} />
      </div>
    </div>
  );
};

export default FeedbackDetail;
