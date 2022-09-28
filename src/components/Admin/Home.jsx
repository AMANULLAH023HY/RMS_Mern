import React from "react";
import AFooter from "./AFooter";
import ANavbar from "./ANavbar";
import img from "../images/services.jpg";
import "./Home.css"
import Card from "./Card";
function Home() {



  return (
    <div>
      <ANavbar />
      <div className="back">
        <div className="container">
          <h1>Hello Prathmesh👋</h1>
        </div>
        <img src={img} alt="" />
      </div>
      <Card/>
      
      <AFooter />
    </div>
  );
}

export default Home;
