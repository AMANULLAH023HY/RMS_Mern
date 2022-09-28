import React, { useState } from "react"
import "./Hero.css"
import { NavLink } from "react-router-dom";
import video from "../../assets/bg.mp4";


const Hero = () => {
  const [location,setLocation] = useState('');


  const submitHandler = () => {
    setLocation('');
  }
  return (
    <>
      <section className='hero'>
        <video src={video} autoPlay loop />
        <div className='container'>
        <div className='heading'>
        <h1>Search Your Next Home </h1>
        <p>Find new & featured property located in your local city.</p>
      </div>

          <form className='flex' onSubmit={submitHandler}>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' value={location} onChange={(e)=>setLocation(e.target.value)} />
            </div>
            
            <div className='box'>
              <h4>Serach By location</h4>
            </div><NavLink to={`/properties/${location}`}>
            <button className='btn1' type="submit">
              <i className='fa fa-search'>Search</i>
            </button>
            </NavLink>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
