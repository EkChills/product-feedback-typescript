import { useNavigate } from "react-router-dom";
import leftArrow from "../assets/shared/icon-arrow-left.svg";
import newFeedbackIcon from "../assets/shared/icon-new-feedback.svg";
import FeedbackInput from "../components/FeedbackInput";
import { useState } from "react";
import FeedbackSelect from "../components/FeedbackSelect";
import { Category } from "../types/storeTypes";
import { useForm } from "react-hook-form";
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
    category: "UI",
    description: "",
    categoryOptions: ["Feature", "UI", "UX", "Enhancement", "Bug"],
  });
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors}} = useForm()
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void => {
    const {name, value} = e.target
    setFeedbackInputs((prevInputs)  => ({...prevInputs, [name] : value}))    
  }
  console.log(feedbackInputs);

  const handleSubmitHandler = () => {
    console.log('yo') 
  }
  
  return (
    <form onSubmit={handleSubmit(handleSubmitHandler)} className="px-[1.5rem] bg-[#F7F8FD] min-h-[100vh] w-full sm:px-[7.125rem] pt-[2rem] sm:pt-[4rem] pb-[4rem] md:px-[10rem] xl:px-[28.125rem] lg:pt-[5rem]">
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
          <div className="flex flex-col space-y-1">
          <FeedbackInput
            titleText="feedback title"
            className={`h-[3rem] ${errors.title ? 'border-[#D73737]' : ''}`}
            descText="add a short descriptive headline"
            value={feedbackInputs.title}
            change={handleChange}
            {...register('title', {required:true})}
          />
          {errors.title && <label htmlFor="title" className={`${errors.title ? 'visible' : 'invisible'}font-[400] text-left text-[#D73737] text-[.8125rem] sm:text-[.875rem]`}>Can't be empty</label>}
          </div>
 
          <FeedbackSelect
            titleText="category"
            descText="choose a category for your feedback"
            selectOptions={feedbackInputs.categoryOptions}
            value={feedbackInputs.category}
            change={handleChange}
            name="category"
          />
          <div>
          <FeedbackInput
            titleText="feedback detail"
            className={`h-[7.5rem] ${errors.title ? 'border-[#D73737]' : ''}`}
            descText="add a short descriptive headline"
            value={feedbackInputs.description}
            change={handleChange}
            {...register('description', {required:true})}
          />
          {errors.title && <label htmlFor="title" className={`${errors.title ? 'visible' : 'invisible'}font-[400] text-left text-[#D73737] text-[.8125rem] sm:text-[.875rem]`}>Can't be empty</label>}
          </div>
        </div>
        <div className="flex w-[100%] mt-[2.5rem] flex-col space-y-[1rem] md:flex-row-reverse md:items-center md:space-y-0 md:justify-start md:gap-4">
          <ActionButton type="submit" className="bg-[#AD1FEA] w-[100%] md:w-[9rem] hover:opacity-60 transition-opacity" >
            add feedback
          </ActionButton>
          <ActionButton className="bg-[#3A4374] w-[100%] md:w-[9rem] hover:opacity-60 transition-opacity" >
            cancel
          </ActionButton>
        </div>
      </div>
    </form>
  );
};

export default NewFeedback;
