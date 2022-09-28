import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { featured } from "../Data";
// import Data from "../Data";

const BestCard = () => {
      const ex = true;
    const [propertyList , setPropertyList] = useState([]);

      useEffect(()=>{
          axios.get("http://localhost:2000/properties")
          .then(async(res)=>{
            const data = await res.data;
            setPropertyList(data);

          }).catch((err)=>console.log(err));
        },[])
        let filterData1 = propertyList.filter((data)=>{
          if( ex == true  ){
            return data.type ===  "House";

          }
          else{
            return data;
          }

        })
        let filterData3 = propertyList.filter((data)=>{
          if( ex == true  ){
            return data.type ===  "Appartment";

          }
          else{
            return data;
          }

        })
        let filterData5 = propertyList.filter((data)=>{
          if( ex == true  ){
            return data.type ===  "Flat";

          }
          else{
            return data;
          }

        })
        let filterData2 = propertyList.filter((data)=>{
          if( ex == true  ){
            return data.type ===  "Villa";

          }
          else{
            return data;
          }

        })
        let filterData4 = propertyList.filter((data)=>{
          if( ex == true  ){
            return data.type ===  "Office";

          }
          else{
            return data;
          }

        })
  //      
      const featured = [
        {
          cover: "../images/hero/h1.png",
          name: "House",
          total: `${filterData1.length} Property`,
        },
        {
          cover: "../images/hero/h2.png",
          name: "Villa",
          total: `${filterData2.length} Property`,
        },
        {
          cover: "../images/hero/h3.png",
          name: "Appartment",
          total: `${filterData3.length} Property`,
        },
        {
          cover: "../images/hero/h4.png",
          name: "Office ",
          total: `${filterData4.length} Property`,
        },
        {
          cover: "../images/hero/h6.png",
          name: "Flat",
          total: `${filterData5.length} Property`,
        },]
 
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((items, index) => (
          <NavLink to={`/filtertype/${items.name}`}>
            <div className="box" key={index}>
              <img src={items.cover} alt="" />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default BestCard;
