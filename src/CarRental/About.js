import React from "react";
import why from "./assets/why.avif"


const About = () => {
  return (
    <>
    <div className="car-container">
      <h3
        className="d-flex align-items-center justify-content-center h-100 fs-2 fw-bold"
        style={{ color: "whitesmoke" }}
      >
       Rent Cars. Deliver Great Experiences
      </h3>
    </div>
    <section className="py-5" style={{backgroundColor:" #f8f9fa"}}>
    <div className="container">
      <div className="row align-items-center">
        
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={why} className="w-100 h-100" alt="error"/>
        </div>

     
        <div className="col-md-6">
          <h2 style={{fontSize: "32px", marginBottom: "15px", color: "darkblue", fontWeight:"600"}}>Why Choose Us</h2>
          <p style={{fontSize: "16px", marginBottom: "20px", color: "black"}}>
            Discover the difference with our car rental service. We offer reliable vehicles,
            competitive pricing, and top-notch support for a smooth experience.
          </p>
          <ul style={{listStyle: "none",paddingLeft:"0"}} >
            <li style={{marginBottom: "10px"}}>✔ <i className="bi bi-headset"></i> Customer Support - Available 24/7</li>
            <li style={{marginBottom: "10px"}}>✔ <i className="bi bi-currency-dollar"></i> Best Price - Competitive rates</li>
            <li style={{marginBottom: "10px"}}>✔ <i className="bi bi-patch-check"></i> Verified Brands - Trusted vehicles</li>
            <li style={{marginBottom: "10px"}}>✔ <i className="bi bi-geo-alt"></i> Many Locations - Easy pickup/drop</li>
            <li style={{marginBottom: "10px"}}>✔ <i className="bi bi-person-badge"></i> Experienced Driver - On request</li>
            <li style={{marginBottom: "10px"}}>✔ <i className="bi bi-x-circle"></i> Free Cancellations - Flexible bookings</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section >
    <div className="container mb-5">
      
      <div className="row g-4">
   
        <div className="col-md-4 text-center">
          <div >
            <i className="bi bi-bullseye" style={{fontSize: "40px",color:"maroon", marginBottom: "15px"}}></i>
            <h5 style={{fontSize: "25px", marginBottom: "15px", color: "darkblue", fontWeight:"600"}}>Our Mission</h5>
            <p style={{fontSize: "15px",color:"  black"}} >
              To provide safe, reliable, and affordable car rental services that exceed customer expectations and create memorable journeys.
            </p>
          </div>
        </div>

       
        <div className="col-md-4 text-center">
          <div >
            <i className="bi bi-eye" style={{fontSize: "40px",color:" maroon", marginBottom: "15px"}}></i>
            <h5 style={{fontSize: "25px", marginBottom: "15px", color: "darkblue", fontWeight:"600"}} >Our Vision</h5>
            <p style={{fontSize: "15px",color:"  black"}}>
              To be the most trusted and innovative car rental brand, leading the industry with sustainability and technology.
            </p>
          </div>
        </div>

       
        <div className="col-md-4 text-center">
          <div >
            <i className="bi bi-shield-check" style={{fontSize: "40px",color:"maroon", marginBottom: "15px"}}></i>
            <h5 style={{fontSize: "25px", marginBottom: "15px", color: "darkblue", fontWeight:"600"}} >Our Promise</h5>
            <p style={{fontSize: "15px",color:"  black"}}>
              We promise to deliver quality vehicles, transparent pricing, and outstanding customer service—every time you ride with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
   
  );
};

export default About;
