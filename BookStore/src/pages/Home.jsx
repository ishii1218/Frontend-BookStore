//import React from 'react'

import Hero from "../components/Home/Hero"
import RecentlyAdded from "../components/Home/RecentlyAdded"  

const Home = () => {
  return (
    <div className="bg-green-100/90  ">
      <Hero /> 
      <div className="pb-10">
        <RecentlyAdded />
      </div> 
    </div>
  )
}

export default Home