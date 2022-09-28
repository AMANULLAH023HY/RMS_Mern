import axios from "axios"
import React, { useEffect, useState } from "react"
import img1 from '../../assets/hero-img.jpg'
import { NavLink} from "react-router-dom";


const FeaturedCard = () => {

  const [propertyList , setPropertyList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:2000/properties")
    .then(async(res)=>{
      const data = await res.data;
      setPropertyList(data);

    }).catch((err)=>console.log(err));
  },[])
  // console.log(propertyList)
  return (
    <>
      <div className='content grid3 mtop'>
        {(propertyList.slice(0,6)).map((data,index) => {
          return (
            <NavLink to={`/Uproperty/${data._id}`} >

            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={img1} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: data.rentSell === "For Sale" ? "#25b5791a" : "#ff98001a", color: data.rentSell === "For Sale" ? "#25b579" : "#ff9800" }}>{data.rentSell}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{data.agencyName}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {data.address}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <span>{data.price}</span>
                </div>
                <span>{data.Type}</span>
              </div>
            </div>
            </NavLink>
          )
        })}
      </div>
    </>
  )
}

export default FeaturedCard
