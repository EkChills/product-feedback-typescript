import { useNavigate } from "react-router-dom";
import leftArrow from "../assets/shared/icon-arrow-left.svg";
import newFeedbackIcon from "../assets/shared/icon-new-feedback.svg";
import FeedbackInput from "../components/FeedbackInput";
import { useState } from "react";
import FeedbackSelect from "../components/FeedbackSelect";
import { Category } from "../types/storeTypes";
import ActionButton from "../components/ui/ActionButton";

type FeedbackInputs = {
  title: string;
  category: string;
  description: string;
  categoryOptions: string[];
};

const NewFeedback = () => {
  const [feedbackInputs, setFeedbackInputs] = useState<FeedbackInputs>({
    title: "",
    category: "",
    description: "",
    categoryOptions: ["Feature", "UI", "UX", "Enhancement", "Bug"],
  });
  const navigate = useNavigate();
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void => {
    const {name, value} = e.target
    setFeedbackInputs((prevInputs)  => ({...prevInputs, [name] : value}))    
  }
  console.log(feedbackInputs);
  
  return (
    <div className="px-[1.5rem] bg-[#F7F8FD] min-h-[100vh] w-full sm:px-[7.125rem] pt-[2rem] sm:pt-[4rem] pb-[4rem] md:px-[10rem] xl:px-[28.125rem] lg:pt-[5rem]">
      <div className="flex items-center mb-[2.2rem]">
        <button
          onClick={() => navigate(-1)}
          className="flex mr-auto items-center space-x-[1rem]"
        >
          <img src={leftArrow} alt="back arrow icon" />
          <p className="text-[#647196] font-bold text-[.8125rem] sm:text-[.875rem]">
            go back
          </p>
        </button>
      </div>
      <div className=" relative flex flex-col bg-[#FFFFFF] p-[1.5rem] sm:p-[2rem] rounded-lg">
        <img
          src={newFeedbackIcon}
          alt="add icon"
          className="w-[2.5rem] absolute top-[-1rem] sm:w-[3.5rem]"
        />
        <h2 className="text-[#3A4374] capitalize mt-[2.75rem] font-bold text-[1.125rem] mb-[2.5rem] sm:text-[1.5rem]">
          create new feedback
        </h2>
        <div className="flex flex-col space-y-[1.5rem]">
          <FeedbackInput
            titleText="feedback title"
            className="h-[3rem]"
            descText="add a short descriptive headline"
            name='title'
            value={feedbackInputs.title}
            change={handleChange}
          />
          <FeedbackSelect
            titleText="category"
            descText="choose a category for your feedback"
            selectOptions={feedbackInputs.categoryOptions}
            name="category"
            value={feedbackInputs.category}
            change={handleChange}
          />
          <FeedbackInput
            titleText="feedback detail"
            className="h-[7.5rem]"
            descText="add a short descriptive headline"
            name="description"
            value={feedbackInputs.description}
            change={handleChange}
          />
        </div>
        <div className="flex w-[100%] mt-[2.5rem] flex-col space-y-[1rem]">
          <ActionButton className="bg-[#AD1FEA] w-[100%]" >
            add feedback
          </ActionButton>
          <ActionButton className="bg-[#3A4374] w-[100%]" >
            cancel
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
