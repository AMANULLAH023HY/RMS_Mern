import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import img from "../images/services.jpg"
import img2 from "../images/about.jpg"
import "./about.css"

function About() {
  return (
    <>
    <Navbar />
    <section className='about'>
    <div className='back'>
        <div className='container'>
          <h1>About US</h1>
        </div>
        <img src={img} alt='' />

        </div>
        <div className='container flex mtop'>
          <div className='left row'>
          <div className='heading'>
        <h1>Our Agency Story </h1>
        <p>Check out our company story and work process.</p>
      </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={img2} alt='' />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About