import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  commentLoading:boolean;
  replyLoading:boolean;
  nestedReplyLoading:boolean;
}

const initialState:InitialState = {
  commentLoading:false,
  replyLoading:false,
  nestedReplyLoading:false,
}

export const postComment = createAsyncThunk('comment/post', async(_, thunkApI) => {
  try {
    await new Promise((resolve, reject) => {
      resolve(setTimeout(() => {
        return Promise.resolve()
      },2000))
    })
  } catch (error) {
    thunkApI.rejectWithValue('couldnt add comment')
  }
})

export const asyncRepliesSlice = createSlice({
  name:'asyncRepliesSlice',
  initialState,
  reducers:{

  },
  extraReducers(builder) {
    builder.addCase(postComment.pending, (state:InitialState, {payload}) => {
      state.commentLoading = true
    }).addCase(postComment.fulfilled, (state, {payload}) => {
      state.commentLoading = false
    }).addCase(postComment.rejected, (state:InitialState, {payload}) => {
      state.commentLoading = false
    })
  },
})