import data from "../data.json";
import { createSlice } from "@reduxjs/toolkit";
import { ProductRequest } from "../types/storeTypes";
import { RefObject } from "react";

const allRequests: ProductRequest[] | any = data.productRequests;
const filteredSuggestions: ProductRequest[] | any = data.productRequests.filter(
  (item) => item.status === "suggestion"
);
const filteredPlanned: ProductRequest[] | any = data.productRequests.filter(
  (item) => item.status === "planned"
);
const filteredProgress: ProductRequest[] | any = data.productRequests.filter(
  (item) => item.status === "in-progress"
);
const filteredLive: ProductRequest[] | any = data.productRequests.filter(
  (item) => item.status === "live"
);

interface FilterBody {
  id: number;
  option: string;
}

interface SortOption {
  id: number;
  sortOption: string;
}

interface Init {
  allRequests: ProductRequest[];
  suggestions: ProductRequest[];
  planned: ProductRequest[];
  inProgress: ProductRequest[];
  live: ProductRequest[];
  filterOptions: Array<FilterBody>;
  sortOptions: SortOption[];
  sortOption: string;
}

const initialState: Init = {
  allRequests: allRequests,
  suggestions: filteredSuggestions,
  planned: filteredPlanned,
  inProgress: filteredProgress,
  live: filteredLive,
  filterOptions: [
    { id: 1, option: "all" },
    { id: 2, option: "ui" },
    { id: 3, option: "ux" },
    { id: 4, option: "enhancement" },
    { id: 5, option: "bug" },
    { id: 6, option: "feature" },
  ],
  sortOptions: [
    { id: 1, sortOption: "most upvotes" },
    { id: 2, sortOption: "least upvotes" },
    { id: 3, sortOption: "most comments" },
    { id: 4, sortOption: "least comments" },
  ],
  sortOption: "most upvotes",
};

interface SortAction {
  payload: string;
}
interface UpVote {
  payload: {
    ref: number | null ;
    id: number;
  };
}

interface CommentAction {
  payload:number
}

const productRequestSlice = createSlice({
  name: "productRequests",
  initialState,
  reducers: {
    changeSort: (state: Init, { payload }: SortAction): void => {
      state.sortOption = payload;
    },
    incUpVote: (state: Init, { payload }: UpVote): void => {
      const { ref, id } = payload;
      const foundSuggestion = state.suggestions.find(
        (suggestion) => suggestion.id === id
      );

      if (foundSuggestion?.upvotes! - 1 === ref) {
        foundSuggestion!.upvotes -= 1
        return;
      }
      foundSuggestion!.upvotes += 1;
    },
    addComment:(state:Init, {payload}:CommentAction) => {
      const foundSuggestion = state.suggestions.find((suggestion) => {
        return suggestion.id === payload
      })
      foundSuggestion?.comments?.push()
    }
  },
});
export const { changeSort, incUpVote } = productRequestSlice.actions;
export default productRequestSlice.reducer;
