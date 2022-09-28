import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import AFooter from "./AFooter";
import ANavbar from "./ANavbar";
import { NavLink } from "react-router-dom"
import img from "../images/pricing.jpg"
import axios from "axios"
import img1 from '../../assets/hero-img.jpg'


function AProperties() {
const [Pdata,setPData] = useState([]);
let i = 1;
const [pId, setPId] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        axios.get(`http://localhost:2000/properties`)
        .then(async res =>{
          const data = await res.data;
          setPData(data);
        }).catch(err=>console.log(err));
      }, [reducerValue])
      useEffect(() => {
        axios.delete(`http://localhost:2000/properties/${pId}`);
        forceUpdate();
      }, [pId]);
      const deleteP = (id, e) => {
        // console.log(id)
        e.preventDefault();
        setPId(id);
        forceUpdate();
      };
  return (
    <>
      <ANavbar />
      <section className='blog-out mb'>
    <div className='back'>
        <div className='container'>
          <h1>Properties</h1>
        </div>
        <img src={img} alt='' />
      </div>
        <div className='container recent'>
          
      <div className='content grid3 mtop'>
        {Pdata.map((data,index) => {
          return (
            <NavLink to={`/Uproperty/${data._id}`} >
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={img1} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: data.rentSell === "For Sale" ? "#25b5791a" : "#ff98001a", color: data.rentSell === "For Rent" ? "#25b579" : "#ff9800" }}>{data.rentSell}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{data.agencyName}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {data.address}
                </p>
                <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      onClick={(e) => deleteP(data._id, e)}
                    >
                      Delete Property
                    </button>
              </div>
              <div className='button flex'>
                <div>
                  <span>{data.price}</span> <label htmlFor=''>/sqft</label>
                </div>
                <span>{data.type}</span>
                
              </div>
            </div>
            </NavLink>
          )
        })}
      </div>
        </div>
      </section>
      <AFooter />
    </>
  );
}

export default AProperties;
