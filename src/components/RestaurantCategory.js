import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

    let [count, setCount] = useState(0);
console.log("dataaaaaaaaaaaaaaaaa",data);
  
 //console.log(a);
   // const [showItems,setShowItems]=useState(false)
 //  console.log(showItems);
//console.log(setShowIndex);
   const handleClick=()=>{
   // setShowItems(!showItems)

   setShowIndex(!showItems)

    }
return(
    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
           {/* <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span> */}
           <span className="font-bold text-lg">{data.title} ({data?.menuCards?.length})</span>
            <span>⬇️</span>
           </div>
            {showItems&&<ItemList items={data.menuCards}/>}
        </div>
       
    </div>
)
}
export default RestaurantCategory