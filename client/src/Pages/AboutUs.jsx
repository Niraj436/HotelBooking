import React from 'react'
import carousel3 from "../Images/carousel3.jpg"

const AboutUs = () => {
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={carousel3} className="md:max-w-sm rounded-lg shadow-2xl" />
    <div className='pr-20'>
      <h1 className="text-5xl font-bold pb-10">About Us</h1>
      <p className="md:py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corrupti facere tempora aspernatur laboriosam facilis distinctio ipsa pariatur deserunt harum tenetur sapiente optio magnam, reprehenderit velit corporis architecto, vel neque odio provident voluptas mollitia. Consectetur incidunt sequi adipisci sint minima dolor, quasi saepe quas magni voluptate consequatur debitis a voluptates?</p>
      <p className="md:py-6 md:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corrupti facere tempora aspernatur laboriosam facilis distinctio ipsa pariatur deserunt harum tenetur sapiente optio magnam, reprehenderit velit corporis architecto, vel neque odio provident voluptas mollitia. Consectetur incidunt sequi adipisci sint minima dolor, quasi saepe quas magni voluptate consequatur debitis a voluptates?</p>
    </div>
  </div>
</div>
    </>
  )
}

export default AboutUs