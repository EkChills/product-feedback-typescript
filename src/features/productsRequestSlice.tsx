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
  planned: getLocalStorage('planned', filteredPlanned),
  inProgress: getLocalStorage('in-progress', filteredProgress),
  live: getLocalStorage('live', filteredLive),
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
      const foundPlanned = state.planned.find((suggestion) => {
        return suggestion.id == id
      })
      const foundProgress = state.inProgress.find((suggestion) => {
        return suggestion.id == id
      })
      const foundLive = state.live.find((suggestion) => {
        return suggestion.id == id
      })
      console.log(foundSuggestion);
      
      if(foundSuggestion) {
        if(foundSuggestion.comments) {
          foundSuggestion.comments = [...foundSuggestion.comments as Comment[], user]
          return
        }
        foundSuggestion['comments'] = [user]
        return
      }
      if(foundPlanned) {
        if(foundPlanned.comments) {
          foundPlanned.comments = [...foundPlanned.comments as Comment[], user]
          return
        }
        foundPlanned['comments'] = [user]
        return
      }
      if(foundProgress) {
        if(foundProgress.comments) {
          foundProgress.comments = [...foundProgress.comments as Comment[], user]
          return
        }
        foundProgress['comments'] = [user]
        return
      }
      if(foundLive) {
        if(foundLive.comments) {
          foundLive.comments = [...foundLive.comments as Comment[], user]
          return
        }
        foundLive['comments'] = [user]
        return
      }
    },
    addReply:(state:Init, {payload:{mainId,commentId, reply, condition}}:ReplyAction) => {
      if(condition === 'add-reply') {
        
      }
      const foundSuggestion = state.suggestions.find((suggestion) => {
        return suggestion.id == mainId
      })
      const foundPlanned = state.planned.find((suggestion) => {
        return suggestion.id == mainId
      })
      const foundProgress = state.inProgress.find((suggestion) => {
        return suggestion.id == mainId
      })
      const foundLive = state.live.find((suggestion) => {
        return suggestion.id == mainId
      })
      const foundComment = foundSuggestion?.comments?.find((comment) => comment.id == commentId)
      const foundCommentPlanned = foundPlanned?.comments?.find((comment) => comment.id == commentId)
      const foundCommentProgress = foundProgress?.comments?.find((comment) => comment.id == commentId)
      const foundCommentLive = foundLive?.comments?.find((comment) => comment.id == commentId)
      if(foundComment) {
        if(foundComment.replies) {
          foundComment.replies = [...foundComment.replies as Replies[], reply] 
          return
        }
        foundComment['replies'] = [reply]
        return
      }
      if(foundCommentPlanned) {
        if(foundCommentPlanned.replies) {
          foundCommentPlanned.replies = [...foundCommentPlanned.replies as Replies[], reply] 
          return
        }
        foundCommentPlanned['replies'] = [reply]
        return
      }
      if(foundCommentProgress) {
        if(foundCommentProgress.replies) {
          foundCommentProgress.replies = [...foundCommentProgress.replies as Replies[], reply] 
          return
        }
        foundCommentProgress['replies'] = [reply]
        return
      }
      if(foundCommentLive) {
        if(foundCommentLive.replies) {
          foundCommentLive.replies = [...foundCommentLive.replies as Replies[], reply] 
          return
        }
        foundCommentLive['replies'] = [reply]
        return
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
    editFeedbackPlanned:(state:Init, {payload}:{payload:{id:string, suggestion:ProductRequest}}) => {
      const {suggestions} = state
      const foundPlanned = state.planned.find((plan) => plan.id == payload.id)
      if(foundPlanned) {
        let index = state.planned.indexOf(foundPlanned)
        state.planned.splice(index,1,payload.suggestion)
        return
      }
      state.planned = [...state.planned, payload.suggestion]
      const index = suggestions.indexOf(state.suggestions.find((item) => item.id == payload.id)!)
      state.suggestions.splice(index,1)
    },
    editFeedbackInProgress:(state:Init, {payload}:{payload:{id:string, suggestion:ProductRequest}}) => {
      const {suggestions} = state
      const foundProgress = state.inProgress.find((plan) => plan.id == payload.id)
      if(foundProgress) {
        let index = state.inProgress.indexOf(foundProgress)
        state.inProgress.splice(index,1,payload.suggestion)
        return
      }
      state.inProgress = [...state.inProgress, payload.suggestion]
      const index = suggestions.indexOf(state.suggestions.find((item) => item.id == payload.id)!)
      state.suggestions.splice(index,1)
    },
    editFeedbackLive:(state:Init, {payload}:{payload:{id:string, suggestion:ProductRequest}}) => {
      const {suggestions} = state
      const foundLive = state.live.find((plan) => plan.id == payload.id)
      if(foundLive) {
        let index = state.live.indexOf(foundLive)
        state.live.splice(index,1,payload.suggestion)
        return
      }
      state.live = [...state.live, payload.suggestion]
      const index = suggestions.indexOf(state.suggestions.find((item) => item.id == payload.id)!)
      state.suggestions.splice(index,1)
    },
    deleteFeedback:(state:Init, {payload}:{payload:string}) => {
      state.suggestions = state.suggestions.filter((Suggestion) => Suggestion.id != payload)
    },
    sortSuggestion:(state:Init, {payload}:{payload:string}) => {
      if(payload === 'most upvotes') {
        state.suggestions.sort((a, b) => b.upvotes - a.upvotes )
        return
      }
      if(payload === 'least upvotes') {
        state.suggestions.sort((a, b) => a.upvotes - b.upvotes )
        return
      }
      if(payload == 'most comments') {
        state.suggestions.sort((a, b) => b.comments?.length! - a.comments?.length!)
        return
      }
      if(payload == 'least comments') {
        state.suggestions.sort((a, b) => a.comments?.length! - b.comments?.length!)
        return
      }
    }
  },
}); 
export const { changeSort, incUpVote, addComment, addReply, addFeedback,editFeedback, deleteFeedback, editFeedbackPlanned, editFeedbackInProgress,editFeedbackLive, sortSuggestion } = productRequestSlice.actions;
export default productRequestSlice.reducer;
