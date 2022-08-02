import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
       </div>

      <h1>This is Contact Page</h1> 
      </>
    </div>
  )
}

export default Contact