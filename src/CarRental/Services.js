import axios from "axios";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://carrental-server-2s67.onrender.com/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className="service-container">
        <h3
          className="d-flex align-items-center justify-content-center h-100 fs-2 fw-bold"
          style={{ color: "whitesmoke" }}
        >
          Service you can trust, comfort you can feel.
        </h3>
      </div>
      <div className="container p-5">
        <p className="fs-6 text-center mb-4">
          At RENT4U, we pride ourselves on offering a diverse range of services
          designed to cater to your every travel need, Whether you're traveling
          for business, leisure, or a special event, our services are trailored
          to provide convenience, luxury, and reliability. Here a closer look at
          what we offer:
        </p>
        <div className="row">
          {services.map((service, index) => {
            return (
              <div key={index} className="col-md-4 mb-3">
                <div className="card h-100 w-100 " style={{ border: "1px solid #3B0008" }}>
                  <div>
                    <h5
                      className="card-title p-2 fs-6 text-uppercase fw-bold "
                      style={{
                        background: "#C04040",
                        textAlign: "center",
                        color: "snow",
                      }}
                    >
                      {service.name}
                    </h5>
                    <p
                      className="card-text p-3 "
                      style={{ fontSize: "16px", color: "black" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Services;
