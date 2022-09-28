import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import img1 from "../../assets/b1.jpeg";
import img2 from "../../assets/living-room.jpg";
import img3 from "../../assets/kitchen.jpg";
import img4 from "../../assets/bed2.jpg";
import img5 from "../../assets/bath2.jpg";
import img6 from "../../assets/plan.jpg";
import "./UProperty.css";

function Property() {
  const { uid } = useParams();
  const [propertyList, setPropertyList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2000/properties/${uid}`)
      .then(async (res) => {
        const data = await res.data;
        setPropertyList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(propertyList);

  return (
    <div>
      <Navbar />

      {propertyList.map((data) => {
        return (
          <div className="featured-p">
            <h1 className="featured-text">Property By {data.agencyName}</h1>
            {/* <p className="featured-text">
              Selected listings by City, State, & Zip based on views.
            </p> */}
            <div className="container">
              <img className="span-3 image-grid-row-2" src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <div className="span-3 img-details">
                <div className="top">
                  <h2>{data.address}, {data.city}</h2>
                  <p>House {data.rentSell}</p>
                  <p className="price">₹{data.price}</p>
                </div>
                <div className="info-grid">
                  <div>
                    <div className="info">
                      <p className="bold">Agent Name:</p>
                      <p>{data.name}</p>
                    </div>
                    <div className="info">
                      <p className="bold">Mobile No:</p>
                      <p>{data.call}</p>
                    </div>
                  </div>
                  <div>
                    <div className="info">
                      <p className="bold">Square Feet:</p>
                      <p>{data.area}</p>
                    </div>
                    <div className="info">
                      <p className="bold">{data.bhk}</p>
                      <p>{data.type}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="span-2 right-img-details">
                <p>
                  A beautiful modern day home in the city with a full-size pool.
                  Spacious and luxurious home located in {data.city}. Including media
                  room, workout facility, and built-in sauna.{" "}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="plan-main">
        <div className="plan">
        <h2>Floar Plan</h2>
        <img src={img6} alt="" />
        </div>
        <div className="why">
          <h2>Why you should consider this Property ?</h2>
          <ul>
            <li>G+32 (3 side open apartments)</li>
            <li>Extravagant 30,000 sq. ft. 3 level clubhouse with host of amenities. Exquisitely designed for the connoisseurs of fine tastes</li>
            <li>Amenities includes : Elevated all-weather infinity-edge swimming pool, Mini theatre, Amphitheatre ,Tennis court and half basketball court, Crèche & Co-Working space & Many More</li>
            <li>Concept of smart living with voice & touch activated digital features Like smart mood lighting, automated curtains, Panic button, Voice command controlling devices etc.</li>
            <li>75% to 80% Open + Green Area</li>
            <li>Properties with 100% power backup available</li>
          </ul>
        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default Property;
