import { ChangeEvent, ChangeEventHandler, useState } from "react"
import ActionButton from "./ui/ActionButton"
import { addComment } from "../features/productsRequestSlice"
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector, useAppDispatch } from "../types/hooks"
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";

interface Props {
  id:number | string;
}

const AddComment = ({id}:Props):JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {user} = useAppSelector((store) => store.user)
  const [comment, setComment] = useState<string>('')
  const dispatch = useAppDispatch()
  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    setComment(event.target.value)
    console.log(comment); 
  }

  const postComment = async(event:React.FormEvent):Promise<void> => {
    event.preventDefault()
    if(!comment || isLoading) {
      return
    }
    setIsLoading(true)
    await new Promise((resolve, reject) => {
      if(comment) {
        setTimeout(() => {
          resolve('promise resolved')
        }, 2000)
      } else {
        reject('couldnt post comment')
      }
    }).finally(() => setIsLoading(false))
    dispatch(addComment({id:id, user:{
      id:uuidv4(),
      content:comment,
      user:{
        name:user.name,
        username:user.username,
        image:user.image
      }
    }}))
    toast.success('Comment Added')
    setComment('')
  }


  return (
    <form onSubmit={postComment} className="flex flex-col bg-[#FFFFFF] p-[1.5rem]  rounded-lg">
      <h2 className="text-[#3A4374] font-bold text-[1.125rem] capitalize">add comments</h2>
      <input onChange={handleChange} value={comment} type="text" placeholder="Type your comment here" className="input mt-8 text-[#3A4374] input-bordered input-primary bg-[#F7F8FD] h-[5rem] w-full" />
      <div className="flex items-center justify-between mt-[1rem]">
        <span className="text-[#647196] text-[.8125rem] sm:text-[.938rem] font-[400]">250 Characters left</span>
        {isLoading ? <BounceLoader  color="#AD1FEA" size={27} /> :
        <ActionButton  className="bg-[#AD1FEA]">
          post comment
        </ActionButton>}
      </div>
    </form>
  )
}

export default AddComment