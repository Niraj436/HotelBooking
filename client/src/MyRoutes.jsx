import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./assets/NavBar";
import Register from "./Pages/Register";
import Signin from "./Pages/Signin";
import AdminLayout from "./assets/AdminLayout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminHotels from "./Pages/Admin/AdminHotels";
import AdminRooms from "./Pages/Admin/AdminRooms";
import AdminUsers from "./Pages/Admin/AdminUsers";
import AdminAddHotel from "./Pages/Admin/AdminAddHotel";
import AdminUpdateHotel from "./Pages/Admin/AdminUpdateHotel";
import AdminAddRoom from "./Pages/Admin/AdminAddRoom";
import AdminRoute from "./SelectiveRoute/AdminRoute";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Footer from "./assets/Footer";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Hotel from "./Pages/Hotel";
import AdminViewRoom from "./Pages/Admin/AdminViewRoom";
import AdminUpdateRoom from "./Pages/Admin/AdminUpdateRoom";
import Book from "./Pages/Book";
import RoomBook from "./Pages/User/RoomBook";
import UserLayout from "./assets/UserLayout";
import UserProfile from "./Pages/User/UserProfile";
import UserFavList from "./Pages/User/UserFavList";
import UpdateProfile from "./Pages/User/UpdateProfile";
import CustomerRoute from "./SelectiveRoute/CustomerRoute";
import UserBookedHotel from "./Pages/User/UserBookedHotel";
import PaymentMain from "./Pages/User/PaymentMain";
import PaymentSuccess from "./Pages/User/PaymentSuccess";
import AdminBooked from "./Pages/Admin/AdminBooked";
import AllHotels from "./Pages/AllHotels";
import EmailVerification from "./Pages/EmailVerification";
import AdminContact from "./Pages/Admin/AdminContact";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassoword from "./Pages/ResetPassoword";
import { Toaster } from 'react-hot-toast';


const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassoword/>} />
          <Route path="/allhotels" element={<AllHotels />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/emailVerify/:token" element={<EmailVerification />} />

          {/* cus */}
          <Route path="/book" element={<Book />} />
          <Route path="/hotel/:id/:roomid" element={<RoomBook />} />

          {/* User */}
          <Route path="/" element={<CustomerRoute />}>
            <Route path="/user" element={<UserLayout />}>
              <Route path="userprofile" element={<UserProfile />} />
              <Route path="userprofile/:id" element={<UpdateProfile />} />
              <Route path="favlist" element={<UserFavList />} />
              <Route path="BookedHotel" element={<UserBookedHotel />} />
            </Route>
              <Route path="paymentmain" element={<PaymentMain/>}/>
              <Route path="payment/success" element={<PaymentSuccess/>}/>
          </Route>

          {/* admin */}
          <Route path="/" element={<AdminRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="hotels" element={<AdminHotels />} />
              <Route path="rooms" element={<AdminRooms />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="booked" element={<AdminBooked />} />
              <Route path="contact" element={<AdminContact />} />
              <Route path="hotels/add" element={<AdminAddHotel />} />
              <Route path="hotels/update/:id" element={<AdminUpdateHotel />} />
              <Route path="rooms/addroom/:hotelid" element={<AdminAddRoom />} />
              <Route path="rooms/viewroom/:id" element={<AdminViewRoom />} />
              <Route
                path="rooms/updateroom/:id"
                element={<AdminUpdateRoom />}
              />
            </Route>
          </Route>
        </Routes>
        
        <Footer />
        <Toaster/>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;
