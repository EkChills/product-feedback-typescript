import React from 'react'

interface Props {
  titleText:string;
  descText:string;
  className?:string;
  name:string;
  value:string;
  change:(e:React.ChangeEvent<HTMLTextAreaElement>) => void
}
const FeedbackInput = ({titleText, descText, className, name, value, change}:Props):JSX.Element => {
  return (
    <div>
      <div className='flex flex-col text-left space-y-1'>
        <h3 className='text-[#3A4374] capitalize text-[.815rem] sm:text-[.875rem] font-bold'>{titleText}</h3>
        <p className='text-[#647196 font-[400] text-[.815rem] sm:text-[.875rem]'>{descText}</p>
      </div>
      <textarea name={name} onChange={change} value={value} placeholder="Bio" className={`textarea mt-[1rem] text-[#3A4374] text-[.815rem] font-[400] sm:text-[.936rem]  bg-[#F7F8FD] resize-none textarea-bordered ${className} w-full max-w-full}` }></textarea>
    </div>
  )
}

export default FeedbackInput