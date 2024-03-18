import React from "react";
import carousel2 from "../Images/carousel2.jpg";
import carousel3 from "../Images/carousel3.jpg";
import carousel4 from "../Images/carousel4.jpg";
import carousel6 from "../Images/carousel6.jpg";
import { Link, NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



const MyCarousel = () => {
  return (
    <>
      <Carousel
        className=""
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
      >
        {/* <div>
          <img src={carousel5} />
          <NavLink to={'/about'}>
          <p className="legend">Learn About us</p>
          </NavLink>
        </div> */}
        <div>
          <img src={carousel2} />
          <NavLink to={'/about'}>
          <p className="legend">Learn About us</p>
          </NavLink>
        </div>
        <div>
          <img src={carousel3} />
          <NavLink to={'/about'}>
          <p className="legend">Learn About us</p>
          </NavLink>
        </div>
        <div>
          <img src={carousel4} />
          <NavLink to={'/about'}>
          <p className="legend">Learn About us</p>
          </NavLink>
        </div>
        <div>
          <img src={carousel6} />
          <NavLink to={'/about'}>
          <p className="legend">Learn About us</p>
          </NavLink>
        </div>
      </Carousel>
    </>
  );
};

export default MyCarousel;
