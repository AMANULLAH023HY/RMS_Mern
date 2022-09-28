import React from "react"
import { NavLink } from "react-router-dom"
import { footer } from "../Data"
import img from '../images/logo2.png'

// import "./ADFooter.css"

const ADFooter = () => {
  return (
    <>
    

    <footer>
        <div className='container'>
          <div className='box1'>
            <div className='logo'>
              <img src={img} alt='' />
             
            </div>
          </div>
          <div className='box1'>
          <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

          </div>

          
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 Real Estate. Developed By Prathmesh Jadhav.</span>
      </div>
    </>
  )
}

export default ADFooter
