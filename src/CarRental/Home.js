import React from "react";

import { NavLink } from "react-router-dom";
import work from "./assets/about.avif";

const Home = () => {
  return (
    <>
      <section className="container-fluid px-0">
        <div className="row home-container">
          <div className="col-lg-12p-5">
            <h1>"Your Trusted Partner for Seamless Travel Solutions"</h1>
            <p>
              "Reliable, Comfortable, and Affordable Car Rental Services
              Tailored to Your Journey"
            </p>
            <NavLink to={"/about"}>
              <button
                className=" me-2"
                style={{
                  color: "antiquewhite",
                  background: "rgb(174, 35, 35) ",
                  padding: "10px 20px",
                  border: "1px solid transparent",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Know More
              </button>
            </NavLink>
            <button
              style={{
                color: "antiquewhite",
                background: "darkblue ",
                padding: "10px 20px",
                border: "1px solid transparent",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Book Now
            </button>
          </div>
          <div className="col-lg-6 p-5 text-center"></div>
        </div>
      </section>

      <section className=" container p-4 work-container">
        <div className="row">
          <div className="col-lg-6">
            <img src={work} className="w-100 h-100" alt="error" />
          </div>
          <div className="col-lg-6">
            <h1 className="my-3" style={{color:"maroon", fontSize:"30px",fontWeight:"600",textTransform:"uppercase"}}>Who are we</h1>
            <p style={{color:"black", fontSize:"16px",fontWeight:"500"}}>
              Welcome to our website, RENT4U where your journey begins with
              exceptional service and reliable vehicles. Established in 2023, we
              have grown to become a trusted name in the car rental industry,
              commited to providing our customers with top-quality vehicles and
              unparalleled customer service.
            </p>
            <div className="mb-1">
            <span><i className="bi bi-check-lg"></i>  Trusted by Thousands of Happy Customers</span>
            </div>
            <div className="mb-1">
            <span><i className="bi bi-check-lg"></i>  Your Safety is Our Priority</span>
            </div>
            <div className="mb-1">
            <span><i className="bi bi-check-lg"></i>  Reliable Cars, Reliable Service</span>
            </div>
           <div className="mb-1">
           <span><i className="bi bi-check-lg"></i>  Drive With Confidence</span>
           </div>
            <div className="mb-1">
            <span><i className="bi bi-check-lg"></i>  Dependable Rentals, Every Time</span>
            </div>
            
            <div className="mb-1">
            <span><i className="bi bi-check-lg"></i>  Excellence in Every Mile</span>
            </div>
            <NavLink to={"/about"}>
            <button className="mt-3">Read More</button>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="container p-4 how-container">
        <h1 className="text-center mb-3" style={{color:"maroon", fontSize:"30px",fontWeight:"600",textTransform:"uppercase"}}>How it Work</h1>
        <p  style={{color:"darkblue", fontSize:"17px",fontWeight:"500", textAlign:"center"}}>Renting a car with us is simple! Choose your vehicle, Pick your dates, and complete your booking. We'll handle the rest, ensuring a smooth start to your Journey.</p>
        <div className="row mt-4">
          
          <div className="col-md-6 col-lg-4 ">
            <div className="card border-black p-3">
            <span className="d-flex justify-content-center fs-3 mb-2"><i className="bi bi-geo-alt-fill"></i></span>
            <h1 className="text-center" style={{color:"maroon", fontSize:"25px",fontWeight:"600"}}>Choose Location</h1>
            <p className="text-center" style={{color:"black", fontSize:"16px",fontWeight:"500"}}>Select from a variety of pick-up locations that best suit your needs, whether it's close to home, work, or airport</p>
          </div>
          </div>
         
          <div className="col-md-6 col-lg-4 " >
            <div className="card border-black p-3">
            <span className="d-flex justify-content-center fs-3 mb-2"><i className="bi bi-calendar"></i></span>
            <h1 className="text-center" style={{color:"maroon", fontSize:"25px",fontWeight:"600"}}>Pick-up Date</h1>
            <p className="text-center" style={{color:"black", fontSize:"16px",fontWeight:"500"}}>Choose the exact date and time for your car pick-up, ensuring that your vehicle is ready when you need it.</p>
          </div>
          </div>
          <div className="col-md-6 col-lg-4 " >
            <div className="card border-black p-3">
            <span className="d-flex justify-content-center fs-3 mb-2"><i className="bi bi-car-front-fill"></i></span>
            <h1 className="text-center" style={{color:"maroon", fontSize:"25px",fontWeight:"600"}}>Book your Car</h1>
            <p className="text-center" style={{color:"black", fontSize:"16px",fontWeight:"500"}}>Complete your booking with just a few clicks, and we'll prepare your vehicle to ensure a hassle-free pick-up.</p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
