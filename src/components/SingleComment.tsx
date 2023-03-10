import { useState } from "react";
import AddReply from "./AddReply";
import SingleReply, { IdentifierProps } from "./SingleReply";
import { Reply } from "../types/storeTypes";

interface User {
  image:string;
  name:string;
  username:string
}

export interface Replies extends IdentifierProps {
  content:string;
  replyingTo:string;
  user:User;
}


export interface Comment {
  id:number | string;
  content:string | undefined;
  user:User;
  replies?:Reply[],
  mainId:number | string
}



const SingleComment = ({id,content,user, replies, mainId}:Comment) => {
  const [showReply, setShowReply] = useState<boolean>(false)
  const toggleReply = ():void => {
    setShowReply(prevReply => !prevReply)
  }
  return (
    <>
    <article className={`flex flex-col  mt-4 space-y-[1rem]`}>
      <div className="sm:flex sm:items-start sm:space-x-8">
      <img src={user.image} className="hidden rounded-full sm:block w-[2.5rem] h-[2.5rem]" alt="user avatar" />
      <div className="w-full">
      <div className="flex items-center justify-between mb-4 w-[100%]">
        <div className="flex items-center space-x-4 sm:space-x-0">
          <img src={user.image} className="rounded-full sm:hidden w-[2.5rem] h-[2.5rem]" alt="user avatar" />
          <div className="flex flex-col space-y-1">
            <h3 className="text-[#3A4374] text-[.8215rem] sm:text-[.875rem] font-bold">
              {user.name}
            </h3>
            <p className="text-[#647196] text-[.8215rem] sm:text-[.875rem]">@{user.username}</p>
          </div>
        </div>
        <button onClick={toggleReply} className="text-[#4661E6] text-[.8215rem] capitalize sm:text-[.875rem] font-[600]">reply</button>
      </div>
      <p className="text-[#647196] text-[.8215rem] sm:text-[0.938rem]">{content}</p>
      {showReply && <AddReply condition="add-reply" commentId={id} mainId={mainId} setShowReply={setShowReply} />}
      {replies && replies.map((reply, index) => <SingleReply key={index} nestedId={index} content={reply.content} mainId={mainId} commentId={id} replyingTo={reply.replyingTo} user={reply.user}  />)}
      </div>

      </div>
    </article>
    </>
  )
}

export default SingleComment