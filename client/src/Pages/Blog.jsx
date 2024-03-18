import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../Images/blog1.jpg";
import blog2 from "../Images/blog2.jpg";
import blog3 from "../Images/blog3.jpg";
import blog4 from "../Images/blog4.jpg";
import blog5 from "../Images/bolg5.jpg";
import blog6 from "../Images/blog6.jpg";

const Blog = () => {
  return (
    <>
      <div className="dark text-center py-20 text-3xl font-bold bg-gray-200 shadow-md">
        Blog Posts
      </div>
      <div className="md:flex justify-center gap-4 py-4 px-6">
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={blog1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to make best holiday with your family
            </h2>
            <p>March 10, 2021</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
              reiciendis vitae aliquam tempora?
            </p>
            <div className="card-actions justify-end">
              <Link className="text-orange-500 hover:text-black">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={blog2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Natural relaxation - Hotel SPA & Wellness
            </h2>
            <p>March 15, 2021</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
              reiciendis vitae aliquam tempora?
            </p>
            <div className="card-actions justify-end">
              <Link className="text-orange-500 hover:text-black">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={blog3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to make best holiday with your family
            </h2>
            <p>March 10, 2021</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
              reiciendis vitae aliquam tempora?
            </p>
            <div className="card-actions justify-end">
              <Link className="text-orange-500 hover:text-black">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center gap-4 py-4 px-2">
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={blog4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to make best holiday with your family
            </h2>
            <p>March 10, 2021</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
              reiciendis vitae aliquam tempora?
            </p>
            <div className="card-actions justify-end">
              <Link className="text-orange-500 hover:text-black">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={blog5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Natural relaxation - Hotel SPA & Wellness
            </h2>
            <p>March 15, 2021</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
              reiciendis vitae aliquam tempora?
            </p>
            <div className="card-actions justify-end">
              <Link className="text-orange-500 hover:text-black">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={blog6} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to make best holiday with your family
            </h2>
            <p>March 10, 2021</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
              reiciendis vitae aliquam tempora?
            </p>
            <div className="card-actions justify-end">
              <Link className="text-orange-500 hover:text-black">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Blog;
