import React from 'react'
import { Link } from 'react-router-dom'

const CarouselHeader = ({data}) => {
  //console.log(data.action.text);
  return (
    <div className='ml-10'>
   <Link to={data?.action?.link}> 
   <img className='w-60 h-60' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+data?.imageId}
      alt="abc"
    /></Link>
  </div>
  )
}

export default CarouselHeader


