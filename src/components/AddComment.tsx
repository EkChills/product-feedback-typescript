import { useState } from "react"
import ActionButton from "./ui/ActionButton"
import { useAppSelector, useAppDispatch } from "../types/hooks"

const AddComment = ():JSX.Element => {
  const [comment, setComment] = useState<string>('')
  return (
    <div className="flex flex-col bg-[#FFFFFF] p-[1.5rem] rounded-lg">
      <h2 className="text-[#3A4374] font-bold text-[1.125rem] capitalize">add comments</h2>
      <input type="text" placeholder="Type your comment here" className="input mt-8 input-bordered input-primary bg-[#F7F8FD] h-[5rem] w-full" />
      <div className="flex items-center justify-between mt-[1rem]">
        <span className="text-[#647196] text-[.8125rem] sm:text-[.938rem] font-[400]">250 Characters left</span>
        <ActionButton className="bg-[#AD1FEA]">
          post commment
        </ActionButton>
      </div>
    </div>
  )
}

export default AddComment