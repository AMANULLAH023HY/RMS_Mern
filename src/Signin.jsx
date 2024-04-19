import React, { useEffect } from "react";
import { NavLink} from "react-router-dom";
import { useNavigate} from "react-router-dom"
import "./Signin.css"
import img from "./components/images/logo.png"
import axios from 'axios';
import { useState } from "react";


function Signin() {
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const[ex,setex] = useState(false);
  const [data,setData] =useState();
  const navigate = useNavigate()


  const submitHandler = (e) => {
    e.preventDefault();
    if(email && password)
      {
        if(email === "admin@gmail.com" && password === "admin123"){
        navigate(`/admin`)
        alert("Admin login successful")
      }
      }

    const filter = data.filter(data=>{
      if(data.mail === email && data.password === password){
        if(data.type === "user"){
            navigate("/main")
            alert("login Successfully!")
        }
        else{
          console.log("agent")
          alert("login Successfully As Agent!")
          navigate(`/listproperty/${data.name}`)
        }
      }
      else{
        setex(true);
        setEmail("")
        setPassword("")
        
      }
      
      
    })

  };


  useEffect(() => {
    axios.get("http://localhost:2000/user")
    .then(async res =>{
      const data = await res.data;
      setData(data);
    }).catch(err=>console.log(err));
  
    
  }, [])
  
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
      {ex && <div className="red">Entered Invalid Data</div>}

        Email id: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <input type="submit" value="SignIn" />
        <NavLink to={`/signup`}>
      <input type="button" value="Register" />

      </NavLink>
      </form>

      <div className='footer'>
        <span>© 2024 Real Estate. Developed By Adil Rose.</span>
      </div>
    </>
  );
}

export default Signin;
