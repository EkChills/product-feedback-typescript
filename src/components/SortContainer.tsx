import { useAppSelector, useAppDispatch } from "../types/hooks";
import {changeSort} from '../features/productsRequestSlice'
import check from '../assets/shared/icon-check.svg'

const SortContainer = (): JSX.Element => {
  const { sortOptions, sortOption:sortValue } = useAppSelector((store) => store.productRequest);
  const dispatch = useAppDispatch()
  return (
    <div className="w-[15.938rem] bg-[#FFFFFF] absolute shadow-lg top-[4.6rem] left-0 rounded-md flex flex-col  py-[.75rem]">
      {sortOptions.map((option) => {
        const {sortOption} = option
        return (
          <div className="flex items-center border-b px-[1.5rem] border-b-[hsl(231, 33%, 34%)] py-[.75rem]" onClick={() => dispatch(changeSort(sortOption))}>
            <p className="text-[#647196] text-[1rem] font-[400] capitalize">{sortOption}</p>
            {sortOption === sortValue &&  <img src={check} alt="check" className="ml-auto" />}
          </div>
        );
      })}
    </div>
  );
};

export default SortContainer;
