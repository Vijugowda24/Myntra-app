import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name:'fetch',
  initialState: {
    fetchDone: false, //false - PENDING OR true -DONE
    currentlyFetching: false
  },
  reducers:{
    markFetchDone:(state, action)=>{
      state.fetchDone = true;
    },
    markFetchingStarted:(state, action)=>{
      state.currentlyFetching = true
    },
    markFetchingFinished:(state, action)=>{
       state.currentlyFetching = false
    }
  }
})

export const { markFetchingStarted,markFetchingFinished,markFetchDone  } = fetchSlice.actions;
export default fetchSlice.reducer;

