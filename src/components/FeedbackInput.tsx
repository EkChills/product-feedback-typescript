import React from 'react'
import {useForm} from 'react-hook-form'

interface Props extends React.ComponentPropsWithoutRef<'textarea'>{
  titleText:string;
  descText:string;
  className?:string;
  value:string;
  change:(e:React.ChangeEvent<HTMLTextAreaElement>) => void
}
const FeedbackInput = React.forwardRef(({titleText, descText, className,  value,  change,...rest}:Props, ref:any):JSX.Element => {
  return (
    <div>
      <div className='flex flex-col text-left space-y-1'>
        <label className='text-[#3A4374] capitalize text-[.815rem] sm:text-[.875rem] font-bold'>{titleText}</label>
        <p className='text-[#647196 font-[400] text-[.815rem] sm:text-[.875rem]'>{descText}</p>
      </div>
      <textarea {...rest} ref={ref}  onChange={change} value={value} placeholder="Bio" className={`textarea mt-[1rem]  hover:border-[#4661E6] cursor-pointer text-[#3A4374] text-[.815rem] font-[400] sm:text-[.936rem]  bg-[#F7F8FD] resize-none textarea-bordered ${className} w-full max-w-full}` }></textarea>
    </div>
  )
})

export default FeedbackInput