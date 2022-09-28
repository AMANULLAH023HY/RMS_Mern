import React, { useState } from "react"
// import { nav } from "../Data"
import "./Navbar.css"
import { NavLink } from "react-router-dom"
import img from "../images/logo.png"


const Header = (props) => {
  const nav = [
    {
      text: "home",
      path: "/main",
    },
    {
      text: "about",
      path: "/about",
    },
  
    {
      text: "properties",
      path: "/properties",
    },
  
    {
      text: "contact",
      path: "/contact",
    },
  ]
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={img} alt='logo' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index} className="mt-3">
                  <NavLink className="hover" to={list.path}>{list.text}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <NavLink to ="/signin">
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> {"Log Out >"}
            </button>
            </NavLink>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
