import React from "react"
import { team } from "../Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
        <div className='heading'>
        <h1>Our Featured Agents </h1>
      </div>

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
