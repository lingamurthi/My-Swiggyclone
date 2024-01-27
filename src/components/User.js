import React, { useEffect, useState } from 'react'

function User(props) {
   const [count,setCount]= useState(0);
   const [count2,setCount2]= useState(1);


   useEffect(()=>{
this.data=setInterval(()=>{
//console.log("HIIIIIIIII");
},1000)
return ()=>{
    clearInterval(this.data)
}
   },[])
  return (
    <div>
        <h1>count1 {count}</h1>
        <h1>count2 {count2}</h1>
        <h2>{props.name}</h2>
        <h3>Location</h3>
        <h4>Contact</h4>
    </div>
  )
}

export default User