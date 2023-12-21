import {configureStore} from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import fetchStatusSlice from './fetchStatusSlice';
import BagSlice from './BagSlice';
const store = configureStore({
  reducer :{
    items :itemSlice,
    fetchStatus: fetchStatusSlice,
    bag: BagSlice
  }
})

export default store;