import { useAppSelector } from "../types/hooks";


const OptionFilterSection = () => {
  const {filterOptions} = useAppSelector((store) => store.productRequest)
  return (
    <div className="p-[1.5rem] bg-[#FFFFFF] flex flex-col min-h-[11.125rem] rounded-lg space-y-[1.2rem]">
      <div className="flex items-center space-x-[.5rem] ">
        {filterOptions.slice(0, 3).map((item) => {
          const { id, option } = item;
          return (
            <button
              key={id}
              className={`rounded-md px-[1rem] cursor-pointer hover:bg-[#CFD7FF] transition-all duration-300 text-[#4661E6] text-[.84rem] capitalize bg-[#F2F4FF] font-[600] py-1`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="flex items-center space-x-[.5rem] ">
        {filterOptions.slice(3, 5).map((item) => {
          const { id, option } = item;
          return (
            <button
              key={id}
              className={`small-btn`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="flex items-center space-x-[.5rem] ">
        {filterOptions.slice(5).map((item) => {
          const { id, option } = item;
          return (
            <button
              key={id}
              className={`small-btn`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OptionFilterSection;
