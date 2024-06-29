//import React from 'react'

import Hero from "../components/Home/Hero"
import Pricing from "../components/Home/Pricing"
import RecentlyAdded from "../components/Home/RecentlyAdded"  

const Home = () => {
  return (
    <div className="bg-green-100/90  ">
      <Hero /> 
      <div className="pb-10">
        <RecentlyAdded />
      </div> 
      <div>

        <Pricing />
      </div>
    </div>
  )
}

export default Home