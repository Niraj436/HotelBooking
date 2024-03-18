import React, { useState } from 'react'
import moment from "moment"
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const Availability = () => {

    const [fromdate, setFromdate] = useState()
    const [toDate, setToDate] = useState()

    const filterByDate = (dates) =>{
        console.log(moment(dates[0]).format("DD-MM-YYYY"))
        console.log(moment(dates[1]).format("DD-MM-YYYY"))
        setFromdate(moment(dates[0]).format("DD-MM-YYYY"))
        setToDate(moment(dates[1]).format("DD-MM-YYYY"))
    }
  return (
    <>
    <div>
    <form action="" className='py-10 border border-gray-300 mx-5 mt-6 rounded-md hover:shadow-2xl'>
        <h2 className='text-3xl py-3 font-bold text-center pb-10'> Check Availability</h2>
     <div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center text-start'>
        <div className='py-2'>
            <label className='font-semibold'>Check In - Check out date </label><br />
           <RangePicker className='py-3' bordered={true} format='DD-MM-YYYY' onChange={filterByDate}/>
        </div>
       
        <div className='py-2'>
            <label htmlFor="" className='h2 pr-52 font-semibold'>People</label> <br />
            <select name="" id="adults" className='border border-gray-300 px-1 w-64 py-3'>
                <option value="">01</option>
                <option value="">02</option>
                <option value="">03</option>
                <option value="">04</option>
            </select>
        </div>
    
        <div className='py-2'>
            <label htmlFor="max-price" className='pr-52 font-semibold'>Price</label> <br />
            <input type="number"  className='border border-gray-300 w-64 px-4 py-3' placeholder='Max-price'/>
        </div>
     </div>
        <div className='py-10 flex justify-center'>
          
            <button className=' bg-red-600 text-white hover:bg-red-700 hover:shadow-md px-16 py-4 rounded-md '>Check Availability</button>          
        </div>
     </form>
     </div>
    </>
  )
}

export default Availability