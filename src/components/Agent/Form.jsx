import React from "react";
import ADNavbar from "../Agent/ADNavbar";
import ADFooter from "../Agent/ADFooter";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios";



function Form() {
    const{id } = useParams();
  const [data,setData] = useState();
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [price, setprice] = useState();
  const [rentSell, setrentsell] = useState("For Sell");
  const [bhk, setbhk] = useState("1 BHK");
  const [type, settype] = useState("House");
  const [area, setarea] = useState("");
  const [call, setcall] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:2000/user/${id}`)
    .then(async res =>{
      const data = await res.data[0].CName;
      setData(data);
    }).catch(err=>console.log(err));
  
    
  }, [])

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();
    const obj = {
        agencyName:data,
        name:id,
        city,
        address,
        price,
        rentSell,
        bhk,
        type,
        area,
        call,
      };
      axios.post("http://localhost:2000/properties", obj);
      console.log(obj)
      alert("Property added successfully");
      navigate(`/listproperty/${id}`)
      setcity('')
      setprice()
      setaddress('')
      setbhk('1 BHK')
      setarea('')
      setcall();
      setrentsell('For Sell')
      settype('House')
      
  }




  return (
    <div>
      <ADNavbar id={id} />
      <form >
        City:{" "}
        <input
          type="text"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          
        />
        Address:{" "}
        <input
          type="text"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        Price:{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        Rent or Sell:{" "}
        <select className="select2"
          name="rentSell"
          id=""
          onChange={(e) => setrentsell(e.target.value)}
        >
          <option value="For Rent">For Rent</option>
          <option value="For Sell">For Sell</option>
        </select> <br /><br /><br />
        How Much Bhk:
        <select className="select3" name="bhk" id="" onChange={(e) => setbhk(e.target.value)}>
          <option value="1 BHK">1 BHK</option>
          <option value="1.5 BHK">1.5 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="2.5 BHK">2.5 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="3.5 BHK">3.5 BHK</option>
          <option value="4 BHK">4 BHK</option>
        </select>
        <br /><br /><br />
        Type:
        <select className="select4" name="rentSell" id="" onChange={(e) => settype(e.target.value)}>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Appartment">Appartment</option>
          <option value="Office">Office</option>
          <option value="Flat">Flat</option>
        </select><br /><br /><br />
        Carpet Area(in Sq/ft):
        <input
          type="text"
          value={area}
          onChange={(e) => setarea(e.target.value)}
        />
        Contact Number:{" "}
        <input
          type="number"
          value={call}
          onChange={(e) => setcall(e.target.value)}
        /> 
    <button type="submit" onClick={addUserData}>Submit</button>
      </form>
      <ADFooter />
    </div>
  );
}

export default Form;
