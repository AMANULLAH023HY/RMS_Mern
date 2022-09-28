import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom"



function Card() {
const [Userdata,setUserData] = useState([]);
const [Pdata,setPData] = useState([]);
const ex = true;


    useEffect(() => {
        axios.get(`http://localhost:2000/user`)
        .then(async res =>{
          const data = await res.data;
          setUserData(data);
        }).catch(err=>console.log(err));

        axios.get(`http://localhost:2000/properties`)
        .then(async res =>{
          const data = await res.data;
          setPData(data);
        }).catch(err=>console.log(err));
      }, [])

      const filter1 = Userdata.filter(user =>{
        if(ex){
          return user.type === "user";
        }
      })
      const filter2 = Userdata.filter(user =>{
        if(ex){
          return user.type === "agent";
        }
      })
      const filter3 = Pdata.map(row =>{
        if(ex){
          return row.agencyName;
        }
      })
      // console.log(filter3)
//       const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const unique = Array.from(new Set(filter3));

// console.log(unique);

      // console.log(Userdata)
  return (
    <div>
      <div class="cards">
        <div class="card card-1">
          <div class="card__icon">
            <i class="fas fa-bolt"></i>
          </div>
          <p class="card__exit">
            <i class="fas fa-times"></i>
          </p>
          <h2 class="card__title">
            Number Of Users:    <span>{filter1.length}</span>
          </h2>
          <p class="card__apply">
            
            <a class="card__link" href="#">
            <NavLink to = "/users">See All </NavLink> <i class="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div class="card card-5">
          <div class="card__icon">
            <i class="fas fa-bolt"></i>
          </div>
          <p class="card__exit">
            <i class="fas fa-times"></i>
          </p>
          <h2 class="card__title">
            Number of Agents : <span>{filter2.length}</span>
          </h2>
          <p class="card__apply">
            <a class="card__link" href="#">
            <NavLink to = "/agents">See All </NavLink> <i class="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div class="card card-3">
          <div class="card__icon">
            <i class="fas fa-bolt"></i>
          </div>
          <p class="card__exit">
            <i class="fas fa-times"></i>
          </p>
          <h2 class="card__title">Number of Agencies : <span>{unique.length}</span></h2>
          <p class="card__apply">
            <a class="card__link" href="#">
            See All  <i class="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div class="card card-4">
          <div class="card__icon">
            <i class="fas fa-bolt"></i>
          </div>
          <p class="card__exit">
            <i class="fas fa-times"></i>
          </p>
          <h2 class="card__title">
          Number of Properties : <span>{Pdata.length}</span>
          </h2>
          <p class="card__apply">
            <a class="card__link" href="#">
            <NavLink to = "/aproperties">See All </NavLink><i class="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
