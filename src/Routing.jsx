import React from "react";
import {Routes,Route} from "react-router-dom"
import App from "./App";
import Signin from "./Signin";
import Signup from "./Signup";
import Main from "./Main";
import Properties from "./components/properties/Properties";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import FilterType from "./components/properties/FilterType";
import FilterLocation from "./components/properties/FilterLocation";
import ADContact from "./components/Agent/ADContact";
import ListProperty from "./components/Agent/ListProperty";
import Form from "./components/Agent/Form";
import Property from "./components/Agent/Property";
import UProperty from "./components/properties/UProperty";
import Home from "./components/Admin/Home";
import Users from "./components/Admin/Users";
import Agents from "./components/Admin/Agents";
import AProperties from "./components/Admin/AProperties";
import UpdateP from "./components/Agent/UpdateP";



function Routing() {
 
  

  return (
    <>
      <Routes>

        <Route exact path="/" element={<App />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/main" element={<Main/>} />
        <Route exact path="/properties" element={<Properties/>} />
        <Route exact path="/properties/:l" element={<Properties/>} />
        <Route exact path="/filtertype/:t" element={<FilterType/>} />
        <Route exact path="/filterlocation/:c" element={<FilterLocation/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/listproperty" element={<ListProperty/>} />
        <Route exact path="/listproperty/:id" element={<ListProperty/>} />
        <Route exact path="/ADcontact/:id" element={<ADContact/>} />
        <Route exact path="/form/:id" element={<Form/>} />
        <Route exact path="/Aproperty/:id/:pid" element={<Property/>} />
        <Route exact path="/Uproperty/:uid" element={<UProperty/>} />
        <Route exact path="/admin" element={<Home/>} />
        <Route exact path="/users" element={<Users/>} />
        <Route exact path="/agents" element={<Agents/>} />
        <Route exact path="/aproperties" element={<AProperties/>} />
        <Route exact path="/updatep/:id/:pid" element={<UpdateP/>} />

        
      </Routes>
      
    </>
  );
}

export default Routing;
