import { createSlice} from '@reduxjs/toolkit';
import data from '../data.json'
import { User } from '../types/storeTypes';


const currentUser:User = data.currentUser

interface Initial {
  user:User;
  isSidebarOpen:boolean,
  isSortOpen:boolean;
}

const initialState:Initial = {
  user:currentUser,
  isSidebarOpen:false,
  isSortOpen:false,
}




const userSlice = createSlice({
  name:'userSlice',
  initialState,
  reducers: {
    openSidebar:(state:Initial):void => {
      state.isSidebarOpen = true
    },
    closeSidebar:(state:Initial):void => {
      state.isSidebarOpen = false
    },
    openSort:(state:Initial):void => {
      state.isSortOpen = true
    },
    closeSort:(state:Initial) => {
      state.isSortOpen = false
    }
  }
})


export const {openSidebar, closeSidebar, openSort, closeSort} = userSlice.actions

export default userSlice.reducer
