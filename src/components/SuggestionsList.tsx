import { useAppSelector } from "../types/hooks";
import Suggestion from "./Suggestion";



const SuggestionsList = (): JSX.Element => {
  const { suggestions } = useAppSelector((store) => store.productRequest);
  return (
    <div className="px-[1.5rem] py-[2rem] lg:px-0 flex flex-col space-y-[1rem]">
      {suggestions.map((suggestion) => {
        return <Suggestion key={suggestion.id} {...suggestion} />;
      })}
    </div>
  );
};

export default SuggestionsList;
