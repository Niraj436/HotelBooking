import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../API/authApi'
import { getHotel, updateHotel } from '../../API/HotelsApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminUpdateHotel = () => {
    const {token} = isAuthenticated()
    const {id} = useParams()

    const [hotel, setHotel] = useState({
        name:'',
        type:'',
        city:'',
        address:'',
        distance:'',
        title:'',
        desc:'',
        cheapestPrice:'',
        formdata: new FormData(),
    })

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
      getHotel(id)
      .then(data=>{
        if(data.error){
          console.log(data.error)
        }
        else{
          setHotel({...hotel,...data})
        }
      })
    },[])

    const { formdata, name,type,city,address,distance,title,desc,cheapestPrice } = hotel;
    const handleChange = (e) => {
      if (e.target.name === "photos") {
        formdata.set(e.target.name, e.target.files[0]);
        // console.log(e.target.files[0])
      } else {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
        formdata.set(e.target.name,e.target.value)
      }
    
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        updateHotel(token, formdata, id)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
        
    }

    const showError = () =>{
        if(error)
        return <div className="text-red-600 text-center">{error}</div>
    }

    const redirect = () => {
        if(success){
             return toast.success("Hotel updated successfully")
        
        }

    }
  return (
    <>
    <ToastContainer position='top-right' theme='colored'>

        {redirect()}
    </ToastContainer>
      <form action="">
      <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm w-2/3 mx-auto dark border">
        <h2 className="text-black font-bold text-lg text-center">Update hotel</h2>
        {showError()}
        <div className="mt-4">
          <label className="text-black" htmlFor="name">
            Name
          </label>
          <input
            
            id="name"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label className="text-black" htmlFor="type">
            Type
          </label>
          <select name="type" id="type" className="dark w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" value={type} onChange={handleChange}>
            <option selected disabled>Choose type</option>
            <option value="5 star">5 Star</option>
            <option value="4 Star">4 Star</option>
            <option value="3 Star">3 Star</option>
            <option value="2 Star">2 Star</option>
            <option value="Not defined">Not defined</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="text-black" htmlFor="city" >
            City
          </label>
          <input
            placeholder="Ktm"
            id="city"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label className="text-black" htmlFor="address">
            Address
          </label>
          <input
            placeholder="Thamel"
            id="address"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label className="text-black" htmlFor="distance">
            Distance
          </label>
          <input
            placeholder="4km"
            id="distance"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            type="text"
            name="distance"
            value={distance}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label className="text-black" htmlFor="title">
            Title
          </label>
          <input
            placeholder="best hotel in town"
            id="title"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label className="text-black" htmlFor="desc">
            Description
          </label>
          <textarea
            placeholder="description"
            className="dark w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 resize-none"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="text-black" htmlFor="photos">
            Photos
          </label>
          <input
            type="file"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            id="photos"
            name="photos"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mt-4">
          <label className="text-black" htmlFor="cheapestPrice">
            Cheapest price
          </label>
          <input
            placeholder="Rs 1000"
            id="cheapestPrice"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            type="text"
            name="cheapestPrice"
            value={cheapestPrice}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-green-600 text-white rounded-md px-4 py-3 w-full hover:bg-green-700"
            onClick={handleSubmit}
          >
            Update Hotel
          </button>
        </div>
      </div>
      </form>
    </>
  )
}

export default AdminUpdateHotel