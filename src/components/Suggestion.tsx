import upArrow from '../assets/shared/icon-arrow-up.svg'
import commentIcon from '../assets/shared/icon-comments.svg'
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../types/hooks';
import {incUpVote} from '../features/productsRequestSlice'
import styled from 'styled-components';
import { Link } from 'react-router-dom';



interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

interface Props  {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
}

const Suggestion = ({
  id,
  title,
  category,
  upvotes,
  status,
  description,
  comments,
}: Props ): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const upVoteRef = useRef< number | null>(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    upVoteRef.current = upvotes
  }, [])

   const upvoteChange = useCallback<() => void>(():void => {
    if(upvotes - 1 === upVoteRef.current) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  },[upvotes, upVoteRef])



  useEffect(() => {
   upvoteChange() 
  },[upVoteRef, upvotes])


  const increaseVote = () => {
    dispatch(incUpVote({ref:upVoteRef.current,id:id}))
  }


  return <Wrapper className="flex flex-col bg-[#FFFFFF] p-[1.5rem] rounded-lg space-y-[1rem] sm:flex-row-reverse sm:justify-between">
     <div className='hidden sm:flex items-center space-x-[.6rem]'>
        <img src={commentIcon} alt="comment" />
        <span className='card-title-text'>{comments?.length}</span>
      </div>
    <Link to={`/suggestions/${id}`}><h2 className="card-title-text sm:hidden hover:text-[#4661E6] transition-all ease-in-out">{title}</h2></Link>
    <div className='sm:flex sm:items-center sm:space-x-[2.5rem]'>
    <button onClick={increaseVote} className={`rounded-lg px-[1rem] cursor-pointer  active:bg-[#4661E6] transition-all duration-300 text-[#4661E6] text-[.84rem] capitalize ${isActive? 'bg-[#4661E6]' : 'bg-[#F2F4FE] hover:bg-[#CFD7FF]'} font-[600] py-1 hidden sm:flex items-center space-x-[.6rem] sm:flex-col sm:space-x-0 sm:space-y-[.5rem] sm:p-[1rem] sm:rounded-xl`}>
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4"  className={`${isActive ? 'upvoted-svg' :'downvoted-svg'}`} stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        <span className={` ${isActive ?'text-[#ffffff]' : 'text-[#3A4374]' } text-[.8125rem] font-bold sm:text-[18px] `}>{upvotes}</span>
      </button>
    <div className="flex flex-col space-y-[.5rem] items-start">
    <Link to={`/suggestions/${id}`}><h2 className="card-title-text hidden sm:block hover:text-[#4661E6] transition-all ease-in-out">{title}</h2></Link>
      <p className="card-title-desc">{description}</p>
      <button className="small-btn">
        {category}
      </button>
    </div>
    </div>
   
    <div className="flex sm:hidden  items-center justify-between">
      <button onClick={increaseVote} className={`rounded-lg px-[1rem] cursor-pointer transition-all duration-300 text-[#4661E6] text-[.84rem] capitalize ${isActive? 'bg-[#4661E6]' : 'bg-[#F2F4FE] hover:bg-[#CFD7FF] '} font-[600] py-1 flex items-center space-x-[.6rem] sm:flex-col sm:space-x-0 sm:space-y-[.5rem] sm:p-[1rem] sm:rounded-xl`}>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4"  className={`${isActive ? 'upvoted-svg' :'downvoted-svg'}`} stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        <span className={` ${isActive ?'text-[#ffffff]' : 'text-[#3A4374]' } text-[.8125rem] font-bold sm:text-[18px] `}>{upvotes}</span>
      </button>
      <div className='flex sm:hidden items-center space-x-[.6rem]'>
        <img src={commentIcon} alt="comment" />
        <span className='card-title-text'>{comments?.length}</span>
      </div>
    </div>
  </Wrapper>
};

const Wrapper = styled.div`
  .downvoted-svg {
    stroke:#4661E6;
  }

  .upvoted-svg {
    stroke:#ffffff;
  }
`

export default Suggestion;
