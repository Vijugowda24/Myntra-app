import React from 'react'
import Bagsummary from '../components/Bagsummary'
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux'

function Bag() {
 const bagItems = useSelector(state=> state.bag)
 const items = useSelector(state=> state.items)
 const finalItems = items.filter(item=> {
  const itemIndex = bagItems.indexOf(item.id)
  return itemIndex >=0;
 })
  return (
   <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item=>(
            <BagItem item={item} key={item.id}/>
          ))}
        </div>
          <Bagsummary/>

      </div>
    </main>
   </>
  )
}

export default Bag