import React from 'react'
import './Breakfast.css'
const Breakfast = ({name,abe,description,imgeurl}) => {
  return (
    <div className='Container'>
      <div className='inn'>
      <p><b>{name}</b></p>
      <p>{abe}</p>
      <p>{description}</p>
      <p><img src={imgeurl} alt="photo" height="200px" width="200px" /></p>
    </div>
    </div>
  )
}
export default Breakfast