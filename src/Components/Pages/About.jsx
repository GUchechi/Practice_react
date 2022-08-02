import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
     <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <h1>This is About Page</h1>
    </>
  )
}

export default About