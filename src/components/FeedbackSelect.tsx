interface Props {
  titleText: string;
  descText: string;
  className?: string;
  name:string;
  value:string;
  change:(e:React.ChangeEvent<HTMLSelectElement>) => void,
  selectOptions:string[];
}
const FeedbackSelect = ({
  titleText,
  descText,
  className,
  name,
  change,
  value,
  selectOptions,
}: Props): JSX.Element => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col text-left space-y-1">
        <h3 className="text-[#3A4374] capitalize text-[.815rem] sm:text-[.875rem] font-bold">
          {titleText}
        </h3>
        <p className="text-[#647196 font-[400] text-[.815rem] sm:text-[.875rem]">
          {descText}
        </p>
      </div>
      <select name={name} onChange={change} value={value} className="select w-full mt-[1rem] max-w-full bg-[#F7F8FD]">
        {selectOptions.map((option) => <option value={option}>{option}</option>)}
      </select>
    </div>
  );
};

export default FeedbackSelect;
