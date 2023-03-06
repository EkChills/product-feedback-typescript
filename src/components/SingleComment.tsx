import SingleReply from "./SingleReply";

interface User {
  image:string;
  name:string;
  username:string
}

export interface Replies {
  content:string;
  replyingTo:string;
  user:User;
}


interface Comment {
  id:number;
  content:string;
  user:User;
  replies?:Replies[]
}



const SingleComment = ({id,content,user, replies}:Comment) => {
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
        <button className="text-[#4661E6] text-[.8215rem] capitalize sm:text-[.875rem] font-[600]">reply</button>
      </div>
      <p className="text-[#647196] text-[.8215rem] sm:text-[0.938rem]">{content}</p>
      </div>

      </div>
    </article>
    {replies && replies.map((reply, index) => <SingleReply key={index} {...reply} />)}
    </>
  )
}

export default SingleComment