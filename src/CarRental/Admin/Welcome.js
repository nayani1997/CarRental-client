import React from 'react'
import useCallApi from './CallApi'

const Welcome = () => {
  const cars = useCallApi(`https://carrental-server-2s67.onrender.com/cars`)
  const services = useCallApi(`https://carrental-server-2s67.onrender.com/services`)
  const enquiries = useCallApi(`https://carrental-server-2s67.onrender.com/enquiries`)
  return (
    <div className='container p-5  '>
        <h1 className="text-center fs-2 fw-bold  mb-4" style={{color:"maroon"}}>Welcome to RENT 4U Admin Dashboard</h1>
        <div className='row  '>
          <div className='col-lg-4'>
            <div className='card' style={{boxShadow:" 1px 2px 20px  #3B0008" }}>
              <div className='card-body text-center fw-bold'>
                <h5 className='card-title fw-bold'>
                  {cars.length}+  <i className="bi bi-car-front-fill"></i>
                </h5>
                <h5 className='card-title'>
                  Cars 
                </h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4' >
            <div className='card' style={{boxShadow:" 1px 2px 20px  #3B0008" }}>
              <div className='card-body text-center fw-bold'>
                <h5 className='card-title fw-bold'>
                 {services.length}+ <i className="bi bi-gear"></i>
                </h5>
                <h5 className='card-title'>
                  Services
                </h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card' style={{boxShadow:" 1px 2px 20px  #3B0008" }}>
              <div className='card-body text-center fw-bold'>
                <h5 className='card-title fw-bold'>
                  {enquiries.length}+ <i className="bi bi-chat-dots"></i>
                </h5>
                <h5 className='card-title'>
                  Enquiries
                </h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Welcome