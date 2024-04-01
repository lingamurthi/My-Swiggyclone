import React, { useEffect, useState } from 'react'
import { MENU_API } from './constants'

const useRestaurantMenu = (resId) => {

console.log(resId);
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
fetchData()
    },[])

  const fetchData=async()=>{
const data=await fetch(MENU_API+resId)

const json=await data.json()


console.log("jsonnnnnnnnnnnnnnnn"+json);

setResInfo(json)
//setResInfo(json.data)
  }

  return (
    resInfo
  )
}

export default useRestaurantMenu