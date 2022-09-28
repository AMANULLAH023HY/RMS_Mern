import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ADFooter from './ADFooter'
import ADNavbar from './ADNavbar'

function UpdateP() {
    const{id,pid } = useParams();
    const [city, setcity] = useState("");
    const [address, setaddress] = useState("");
    const [price, setprice] = useState();
    const [rentSell, setrentsell] = useState("For Sell");
    const [bhk, setbhk] = useState("1 BHK");
    const [type, settype] = useState("House");
    const [area, setarea] = useState("");
    const [call, setcall] = useState();
    const navigate = useNavigate()
  // const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
      axios
        .get(`http://localhost:2000/properties/${pid}`)
        .then(async (res) => {
          const data = await res.data[0];
          setcity(data.city)
          setaddress(data.address)
          setprice(data.price)
          setrentsell(data.rentSell)
          setbhk(data.bhk)
          setarea(data.area)
          setcall(data.call)
        })
        .catch((err) => console.log(err));
        // forceUpdate()
    }, []);
  
    const addUserData = async (e) => {
      e.preventDefault();
      const obj = {
        //   agencyName:data,
          city,
          address,
          price,
          rentSell,
          bhk,
          type,
          area,
          call,
        };
        axios.put(`http://localhost:2000/properties/${pid}`, obj);
        // forceUpdate()
        alert("Property added successfully");
        navigate(`/listproperty/${id}`)
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
  )
}

export default UpdateP