import React, { useEffect, useReducer, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ADNavbar from "../Agent/ADNavbar";
import ADFooter from "../Agent/ADFooter";
import { NavLink} from "react-router-dom";
import img1 from '../../assets/hero-img.jpg'
import img from "../images/pricing.jpg"



function ListProperty() {
  const{id } = useParams();
  const [propertyList , setPropertyList] = useState([]);
  const [pId, setPId] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  
  let filterData = propertyList.filter((data)=>{
    if( id ){
      return data.name === id ;
      
    }
  })
    useEffect(()=>{
      axios.get("http://localhost:2000/properties")
      .then(async(res)=>{
        const data = await res.data;
        setPropertyList(data);
  
      }).catch((err)=>console.log(err));
    },[reducerValue])
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
    <div>
      <ADNavbar id= {id} />

    

        
        <section className='blog-out mb'>
    <div className='back'>
        <div className='container'>
          <h1>{id}'s Properties    <div className="buttona">
      <NavLink to={`/form/${id}`}>
        <button className="btn btn-primary">Add Property</button>
        </NavLink>
        </div></h1>
        </div>
        <img src={img} alt='' />
        
      </div>
        <div className='container recent'>
          
          
      <div className='content grid3 mtop'>
        {filterData.map((data,index) => {
          return (
            <NavLink to={`/Aproperty/${id}/${data._id}`} >
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
                <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      onClick={(e) => deleteP(data._id, e)}
                    >
                      Delete Property
                    </button>
                    <NavLink to={`/updatep/${id}/${data._id}`}>
                    <button
                      type="button"
                      class="btn btn-success btn-sm mr"
                    >
                      Edit Property
                    </button>
                    </NavLink>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{data.price}</button> <label htmlFor=''>/sqft</label>
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
      <ADFooter />
    </div>
  );
}

export default ListProperty;
