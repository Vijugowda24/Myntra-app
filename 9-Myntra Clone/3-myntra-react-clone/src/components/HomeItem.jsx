import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBag, removeFromBag } from '../redux/BagSlice';
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";


function HomeItem({item}) {
  const bagItems= useSelector(state=> state.bag)
  const dispatch = useDispatch();

  const elementFound = bagItems.indexOf(item.id) >= 0
  console.log(item.id, elementFound);

  const handleAddToBag = ()=>{
    dispatch(addToBag(item.id))
  }

  const handleRemove = ()=>{
    console.log("removed")
    dispatch(removeFromBag(item.id))
  }
  return (
      <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
   {
   elementFound ?   <button type="button" className="btn w-100 btn-danger" onClick={handleRemove}><MdDeleteForever />
   Remove</button> :  <button type="button" className="btn w-100 btn-success" onClick={handleAddToBag}><IoMdAddCircleOutline />
Add to bag</button>

   }
    
    </div>
  )
}

export default HomeItem