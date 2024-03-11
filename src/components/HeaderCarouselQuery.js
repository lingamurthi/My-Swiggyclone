import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import RestaruentCard from './RestaruentCard'

const HeaderCarouselQuery = () => {
  const [querydata, setQuerydata] = useState([])
  const [filtereddata, setFiltereddata] = useState([])
  const [searchParam] = useSearchParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://corsproxy.org/?" +
          encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.444057&lng=75.908034&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          ))
        const json = await response.json()
        setQuerydata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       // console.log(querydata);
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const urlqueryData = searchParam.get('search_context')
    //console.log('Search Parameter:', urlqueryData)
    if (urlqueryData && querydata.length > 0) {
      const filtered = querydata.filter(q => {
       // console.log('Cuisines:', q?.info?.cuisines)
        return q?.info?.cuisines?.includes(urlqueryData)
      })
      
      //console.log('Filtered Data:', filtered)
      setFiltereddata(filtered)
    }
  }, [searchParam, querydata])

  return (
    <div>
      {filtereddata.map((q, index) => (
        <RestaruentCard key={index} res={q} />
      ))}
    </div>
  )
}

export default HeaderCarouselQuery
