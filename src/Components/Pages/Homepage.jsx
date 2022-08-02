import React from 'react';
import {Link} from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       </div>

       <h1>This is Home Page</h1>
    </>
  )
}
export default Homepage