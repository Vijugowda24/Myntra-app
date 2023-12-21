import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInitialItems } from '../redux/itemSlice';
import { markFetchDone, markFetchingFinished, markFetchingStarted } from '../redux/fetchStatusSlice';

function FetchItem() {
  const fetchStatus = useSelector(state=> state.fetchStatus)
  console.log('fetchStatus',fetchStatus);
 const dispatch =  useDispatch();

useEffect(()=>{
  
  if(fetchStatus.fetchDone) return ;
  console.log("useefect");
  const controller = new AbortController();
  const signal = controller.signal;
dispatch(markFetchingStarted())
fetch('http://localhost:8080/items', {signal}).then(res => res.json()).then(({items}) => {
  dispatch(markFetchDone());
  dispatch(markFetchingFinished())
  dispatch(addInitialItems(items))
})

return ()=>{
  controller.abort()
}
}, [fetchStatus])
  return (
    <>
    
    </>
  )
}

export default FetchItem