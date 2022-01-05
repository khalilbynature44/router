import React from 'react'
import {useNavigate} from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate()
  const navigateTo = () => {
    
  }
  
  return (
    <div>
      <button onClick={navigateTo}>go home</button>
    </div>
  )
}

export default Contact
