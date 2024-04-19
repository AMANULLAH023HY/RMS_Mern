import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate} from "react-router-dom"
import "./signup.css"
import img from "./components/images/logo.png"

function Signup() {
  const navigate = useNavigate();
  const [name, setName] =useState('');
  const [mail, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [type, setType] =useState('user');
  const [CName, setcname] =useState('');
  const submitHandler = (e)=>{
    e.preventDefault();
    const obj= {
      name,
      mail,
      password,
      type,
      CName
    }

    axios.post("http://localhost:2000/user",obj)
    console.log(obj);
    navigate("/signin");

  }
  return (
    <>
    <div className="header">
    <div className='container flex'>
          <div className='logo'>
            <img src={img} alt='logo' />
          </div>
        </div>
        </div>
      <form onSubmit={submitHandler}>
        Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
        emailid: <input type="text" value={mail} onChange={(e)=>setEmail(e.target.value)} required />
        password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <select className="select" name="type" id="" value={type}  onChange={(e)=>setType(e.target.value)}>
          <option value="user">User</option>
          <option value="agent">Agent</option>
        </select>
        {type === "agent" && <div>
          Enter Company Name: <input type="text" value={CName}  onChange={(e)=>setcname(e.target.value)} required/>
          </div>}
        <input type="submit" value="submit" />
        
        {/* <NavLink to={`/signin`}>
          <input type="submit" value="submit" />
        </NavLink> */}
      </form>
      <div className='footer'>
        <span>© 2024 Real Estate. Developed By Adil Rose</span>
      </div>  
    </>
  );
}

export default Signup;
