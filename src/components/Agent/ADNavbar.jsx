import React, { useState } from "react"
import img from "../images/logo.png"
import { NavLink } from "react-router-dom"

const ADNavbar = (props) => {
  const [navList, setNavList] = useState(false)

  const nav = [
    
      {
        text: "List Your properties Here",
        path: `/listproperty/${props.id}`,
      },
    
      {
        text: "contact",
        path: `/ADcontact/${props.id}`,
      },
  ]

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={img} alt='logo' />
          </div>
          <h4>hello {props.id} 👋</h4>

          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index} className="mt-3">
                  <NavLink to={list.path}>{list.text}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <NavLink to ="/signin">
            <button className='btn1 '>
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

export default ADNavbar
