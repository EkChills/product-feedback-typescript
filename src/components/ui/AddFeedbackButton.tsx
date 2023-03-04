import { PropsWithChildren, ReactNode } from "react" 

type props =  {
  children:ReactNode
}

const AddFeedbackButton = ({children}:props):JSX.Element => {
  return (
    <button className='w-[134px] md:w-[9.875rem] hover:bg-[#C75AF6] transition-all duration-500 flex text-[14px] font-bold text-[#F2F4FE] items-center justify-center rounded-md h-[2.75rem] bg-[#AD1FEA]'>
     <span>+ {children}</span>
    </button>
  )
}

export default AddFeedbackButton