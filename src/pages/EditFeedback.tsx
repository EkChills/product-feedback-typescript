import { useNavigate, useParams } from "react-router-dom";
import leftArrow from "../assets/shared/icon-arrow-left.svg";
import newFeedbackIcon from "../assets/shared/icon-new-feedback.svg";
import FeedbackInput from "../components/FeedbackInput";
import { useState } from "react";
import FeedbackSelect from "../components/FeedbackSelect";
import { useForm } from "react-hook-form";
import ActionButton from "../components/ui/ActionButton";
import { addFeedback, deleteFeedback, editFeedback } from "../features/productsRequestSlice";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import {v4 as uuidv4} from 'uuid'
import { toast } from "react-toastify";
import { PuffLoader, RingLoader, ScaleLoader, SquareLoader } from "react-spinners";



type FeedbackInputs = {
  title: string;
  category: string;
  description: string;
  categoryOptions: string[];
};

const EditFeedback = () => {
  const [feedbackLoading, setFeedbackLoading] = useState<boolean>(false)
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false)
  const {id} = useParams<{id:string | undefined}>()
  const {suggestions} = useAppSelector((store) => store.productRequest)
  const singleSuggestion = suggestions.find((suggestion) => suggestion.id == id)!
  const [feedbackInputs, setFeedbackInputs] = useState<FeedbackInputs>({
    title: singleSuggestion.title,
    category: singleSuggestion.category,
    description: singleSuggestion.description,
    categoryOptions: ["Feature", "UI", "UX", "Enhancement", "Bug"],
  });

  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors}} = useForm()
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void => {
    const {name, value} = e.target
    setFeedbackInputs((prevInputs)  => ({...prevInputs, [name] : value}))    
  }
  const dispatch = useAppDispatch()
  console.log(feedbackInputs);

  const handleSubmitHandler = async() => {
    setFeedbackLoading(true)
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => resolve('resolved'), 2000)
      })
      dispatch(editFeedback({id:id!, suggestion:{
        id:id!,
        title:feedbackInputs.title,
        category:feedbackInputs.category,
        upvotes:singleSuggestion.upvotes,
        status:'suggestion',
        description:feedbackInputs.description
      }}))
      toast.success('Feedback Edited')
      navigate('/')
      setFeedbackLoading(false)
    } catch (error) {
      console.log('error');
      setFeedbackLoading(false)
    }
   
  }

  const deleteAction = async() => {
    try {
      setDeleteLoading(true)
      await new Promise((resolve, reject) => {
        setTimeout(() => resolve('resolved'), 2000)
      })
      dispatch(deleteFeedback(id!))
      setDeleteLoading(false)
      toast.success('Suggestion Deleted Successfully')
      navigate('/')
    } catch (error) {
      console.log(error);
      setDeleteLoading(false)
    }
   
  }
  
  return (
    <form onSubmit={handleSubmit(handleSubmitHandler)} className="px-[1.5rem] bg-[#F7F8FD] min-h-[100vh] w-full sm:px-[7.125rem] pt-[2rem] sm:pt-[4rem] pb-[4rem] md:px-[10rem] xl:px-[28.125rem] lg:pt-[5rem]">
      <div className="flex items-center mb-[2.2rem]">
        <button
          onClick={() => navigate(-1)}
          type='button'
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
          {`editing '${singleSuggestion.title}'`}
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
        <div className="flex w-[100%] mt-[2.5rem] flex-col space-y-[1rem] sm:flex-row-reverse sm:items-center sm:space-y-0 sm:justify-between">
          <div className="flex flex-col space-y-[1rem] sm:space-y-0 sm:flex-row sm:items-center sm:gap-4">
          {feedbackLoading ? <PuffLoader color="#AD1FEA" size={27} /> :
          <ActionButton type="submit" className="bg-[#AD1FEA] w-[100%] md:sm-[9rem] hover:opacity-60 transition-opacity" >
            save changes
          </ActionButton>}
          <ActionButton type="button" className="bg-[#3A4374] w-[100%] sm:w-[9rem] hover:opacity-60 transition-opacity" >
            cancel
          </ActionButton></div>
          <ActionButton onClick={deleteAction} type="button" className="bg-[#D73737] sm:mr-4 hover:opacity-60 transition-all sm:w-[9rem]" >
            {
              deleteLoading ? <PuffLoader size={27} color='#ffffff' /> : <span>delete</span>
            }
          </ActionButton>
        </div>
      </div>
    </form>
  );
};

export default EditFeedback;
