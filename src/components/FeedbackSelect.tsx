import React from "react";

interface Props extends React.ComponentPropsWithoutRef<'select'> {
  titleText: string;
  descText: string;
  className?: string;
  value:string;
  change:(e:React.ChangeEvent<HTMLSelectElement>) => void,
  selectOptions:string[];
}
const FeedbackSelect = React.forwardRef(({
  titleText,
  descText,
  className,
  change,
  value,
  selectOptions,
  ...rest
}: Props, ref:any): JSX.Element => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col text-left space-y-1">
        <label className="text-[#3A4374] capitalize text-[.815rem] sm:text-[.875rem] font-bold">
          {titleText}
        </label>
        <p className="text-[#647196 font-[400] text-[.815rem] sm:text-[.875rem]">
          {descText}
        </p>
      </div>
      <select  {...rest} onChange={change} value={value} className="select w-full mt-[1rem]  hover:border-[#4661E6] cursor-pointer max-w-full bg-[#F7F8FD]">
        {selectOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
      </select>
    </div>
  );
});

export default FeedbackSelect;
