import React from 'react'
import image from "../Images/learn.jpg"
import { Link } from 'react-router-dom'

const LearnAboutUs = () => {
  return (
    <>
        <div className='grid lg:grid-cols-2 md:grid-col-1 py-20'>
            <div className='px-4 md:px-24 lg:px-28'>
                <h1 className='text-3xl font-semibold py-6'>Relax in our Hotel</h1>
                <h1 className='text-lg font-medium pb-4'>We make the best for all our customers</h1>
                <h1 className='text-gray-500 pb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis provident pariatur vitae illo vel sequi, quo, dolorem nemo nobis tempora alias accusantium quisquam veritatis ratione voluptatum sed numquam. Facilis, ipsa?
                Fugiat odio, nisi recusandae repellendus labore autem molestias consectetur expedita velit, eius adipisci iusto? Voluptatum assumenda, amet ipsa vero atque magni officiis! Neque consequatur dicta nihil soluta iusto tenetur hic.</h1>
                <Link to={"/about"} className='btn bg-red-600 text-white hover:bg-red-700 hover:shadow-md'> Learn About Us</Link>
            </div>
            <div className='px-4 lg:w-full md:flex md:justify-center pt-4'>
                <img src={image} alt="" style={{height:"400px"}} className='rounded-xl md:w-full md:object-cover sm:w-full sm:object-cover' />
            </div>
        </div>
    </>
  )
}

export default LearnAboutUs