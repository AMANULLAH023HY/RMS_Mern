import axios from "axios"
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { location } from "../Data"
import "./style.css"

const Location = () => {
  const [propertyList , setPropertyList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:2000/properties")
    .then(async(res)=>{
      const data = await res.data;
      setPropertyList(data);

    }).catch((err)=>console.log(err));
  },[])
  const map = propertyList.map(data=>{
    return data.city ;
  })
  console.log(map);
  return (
    <>
      <section className='location padding'>
        <div className='container'>
        <div className='heading'>
        <h1>Explore By Location </h1>
      </div>

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <NavLink to={`/filterlocation/${item.name}`} >
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  
                </div>
              </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
