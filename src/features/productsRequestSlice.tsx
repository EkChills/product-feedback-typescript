import data from "../data.json";
import { createSlice } from "@reduxjs/toolkit";
import { ProductRequest } from "../types/storeTypes";
import { RefObject } from "react";
import { getLocalStorage } from "../utils/localStorage";
import Suggestion from "../components/Suggestion";

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
  suggestions: getLocalStorage('suggestions', filteredSuggestions),
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
    id: number | string;
  };
}

interface User {
  image:string;
  name:string;
  username:string
}

export interface Replies {
  content:string;
  replyingTo:string;
  user:User;
}



interface Comment {
  id:number | string;
  content:string;
  user:User;
  replies?:Replies[]
}


interface CommentAction {
  payload:{
    id:number | string,
    user:Comment
  }
}

type ReplyAction = {
  payload:{
    mainId:number | string,
    commentId: number | string
    reply:Replies,
    condition:string;
  }
}

interface AddFeedbackAction {
  payload:ProductRequest
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
    addComment:(state:Init, {payload:{id, user}}:CommentAction) => {
      const foundSuggestion = state.suggestions.find((suggestion) => {
        return suggestion.id == id
      })
      console.log(foundSuggestion);
      
      if(foundSuggestion) {
        if(foundSuggestion.comments) {
          foundSuggestion.comments = [...foundSuggestion.comments as Comment[], user]
          return
        }
        foundSuggestion['comments'] = [user]
      }
    },
    addReply:(state:Init, {payload:{mainId,commentId, reply, condition}}:ReplyAction) => {
      if(condition === 'add-reply') {
        
      }
      const foundSuggestion = state.suggestions.find((suggestion) => {
        return suggestion.id == mainId
      })
      const foundComment = foundSuggestion?.comments?.find((comment) => comment.id == commentId)
      if(foundComment) {
        if(foundComment.replies) {
          foundComment.replies = [...foundComment.replies as Replies[], reply] 
          return
        }
        foundComment['replies'] = [reply]
      }
    },
    addFeedback:(state:Init, {payload}:AddFeedbackAction):void => {
      state.suggestions = [...state.suggestions as ProductRequest[], payload ]
    },
    editFeedback:(state:Init, {payload}:{payload:{id:string, suggestion:ProductRequest}}) => {
      const {suggestions} = state
      const index = suggestions.indexOf(state.suggestions.find((item) => item.id == payload.id)!)
      console.log(index);
      state.suggestions.splice(index,1,payload.suggestion)
    },
    deleteFeedback:(state:Init, {payload}:{payload:string}) => {
      state.suggestions = state.suggestions.filter((Suggestion) => Suggestion.id != payload)
    }
  },
});
export const { changeSort, incUpVote, addComment, addReply, addFeedback,editFeedback, deleteFeedback } = productRequestSlice.actions;
export default productRequestSlice.reducer;
