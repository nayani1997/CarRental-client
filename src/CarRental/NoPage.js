import React from 'react'
import errorMsg from "./assets/error.gif"
const NoPage = () => {
  return (
    <div className='container p-5 text-center'>
        <img src={errorMsg} className='w-50 h-50' alt='error'/>
    </div>
  )
}

export default NoPage