import React, { useEffect , useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';






const RestaruentMenu = () => {
const [showIndex,setShowIndex]=useState(0)
  

//console.log(showIndex);
    const {resId}=useParams();




   const resInfo= useRestaurantMenu(resId)

if(resInfo===null)
{
    return <Shimmer/>
}
const titleMenu=resInfo.titleMenu 
//const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
//const { itemCards }= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



//console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

//const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//console.log(categories);
  return (
    <div className="text-center">

        {/* <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage} */}
        <h1 className='font-bold my-6 text-2xl'></h1>
        <p className='font-bold text-lg'>
        {/* {categories.map((category,index)=>(
         <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex ? true : false} setShowIndex={()=>{index===showIndex ? setShowIndex(null) :  setShowIndex(index);}}/>
        ) */}
        {titleMenu.map((category,index)=>(
         <RestaurantCategory key={category?.title} data={category} showItems={index===showIndex ? true : false} setShowIndex={()=>{index===showIndex ? setShowIndex(null) :  setShowIndex(index);}}/>
        )
          
        )}
        </p>

     
    </div>
  )
}

export default RestaruentMenu