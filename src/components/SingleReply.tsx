import { useState } from "react"
import AddReply from "./AddReply"
import { Replies } from "./SingleComment"

 export interface IdentifierProps {
  commentId:string | number;
  mainId:string | number;
  nestedId: number | undefined;
}

const SingleReply = ({content, replyingTo, nestedId, user, mainId, commentId}:Replies):JSX.Element => {
  const [showInput, setShowInput] = useState<boolean>(false)
  return (
    <article className={`flex flex-col w-[100%] mt-4 pl-[1.5rem] space-y-[1rem]`}>
    <div className="sm:flex sm:items-start sm:space-x-8">
    <img src={user.image} className="hidden rounded-full sm:block w-[2.5rem] h-[2.5rem]" alt="user avatar" />
    <div className="w-full">
    <div className="flex items-center justify-between  mb-4 ">
      <div className="flex items-center space-x-4 sm:space-x-0">
        <img src={user.image} className="rounded-full sm:hidden w-[2.5rem] h-[2.5rem]" alt="user avatar" />
        <div className="flex flex-col space-y-1">
          <h3 className="text-[#3A4374] text-[.8215rem] sm:text-[.875rem] font-bold">
            {user.name}
          </h3>
          <p className="text-[#647196] text-[.8215rem] sm:text-[.875rem]">@{user.username}</p>
        </div>
      </div>
      <button className="text-[#4661E6] text-[.8215rem] capitalize sm:text-[.875rem] font-[600]" onClick={() => setShowInput(prev => !prev)}>reply</button>
    </div>
    <p className="text-[#647196] text-[.8215rem] sm:text-[.94rem]"><span className="text-[#AD1FEA] text-[.8125rem] sm:text-[0.938rem] font-bold">@{replyingTo + ' '}</span>{content}</p>
    </div>

    </div>
    {showInput && <AddReply setShowInput={setShowInput} nestedId={nestedId} mainId={mainId} commentId={commentId} condition='nested-reply' />}
  </article>
  )
}

export default SingleReply