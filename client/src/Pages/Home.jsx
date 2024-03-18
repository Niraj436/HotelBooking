import React from 'react'
import MyCarousel from '../Components/MyCarousel'
import Availability from '../Components/Availability'
import LearnAboutUs from '../Components/LearnAboutUs'
import { API } from '../config'
import KtmHotels from '../Components/KtmHotels'


const Home = () => {
  return (
    <div className=''>
      <div>
        <MyCarousel/>
      </div>
      {/* <div>
        <Availability/>
      </div> */}
      <div>
        {/* this ktm hotels incluses all cites */}
        <KtmHotels/>
      </div>
      <div>
        <LearnAboutUs/>
      </div>
    </div>
  )
}

export default Home