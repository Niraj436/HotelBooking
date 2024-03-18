import React, { useEffect, useState } from "react";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import PoolIcon from "@mui/icons-material/Pool";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import WifiIcon from "@mui/icons-material/Wifi";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import { getAllPosts } from "../API/testApi";

const Services = () => {

  return (
    <div>
      <div className="text-center py-16 text-4xl font-bold  shadow-md">
        Our Services
      </div>
      <div className=" py-8">
        <div className="flex md:flex-row flex-col  justify-center gap-3 py-4 ">
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                <AirlineSeatIndividualSuiteIcon fontSize="large" className="text-orange-500"/>
              </p>
              <h2 className="card-title">SPA & Wellness</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                quaerat exercitationem omnis, deleniti iusto in?
              </p>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p><LocalCafeIcon fontSize="large" className="text-orange-500"/></p>
              <h2 className="card-title">Resturensts & Bars</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore, eveniet facilis nostrum tempora in.</p>
              
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p><WifiIcon fontSize="large" className="text-orange-500"/></p>
              <h2 className="card-title">Wifi</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore, eveniet facilis nostrum tempora in.</p>
              
            </div>
          </div>
         
        </div>
        <div className="flex md:flex-row flex-col  justify-center gap-3 py-4 ">
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                <PoolIcon fontSize="large" className="text-orange-500" />
              </p>
              <h2 className="card-title">Swimming pool</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                quaerat exercitationem omnis, deleniti iusto in?
              </p>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p><RoomServiceIcon fontSize="large"className="text-orange-500"/></p>
              <h2 className="card-title">24 Hrs Service</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore, eveniet facilis nostrum tempora in.</p>
              
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p><ConnectedTvIcon fontSize="large" className="text-orange-500"/></p>
              <h2 className="card-title">Smart Tvs</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore, eveniet facilis nostrum tempora in.</p>
              
            </div>
          </div>
         
        </div>
        
      </div>
    </div>
  );
};

export default Services;
