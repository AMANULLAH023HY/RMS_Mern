import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../featured/Featured.css";
import img from "../images/pricing.jpg";
import axios from "axios";
import img1 from "../../assets/hero-img.jpg";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function FilterType() {
  const [propertyList, setPropertyList] = useState([]);
  const { t } = useParams();

  console.log(t);

  let filterData = propertyList.filter((data) => {
    if (t) {
      return data.type === t;
    } else {
      return data;
    }
  });

  useEffect(() => {
    axios
      .get("http://localhost:2000/properties")
      .then(async (res) => {
        const data = await res.data;
        setPropertyList(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <section className="blog-out mb">
        <div className="back">
          <div className="container">
            <h1>Properties</h1>
          </div>
          <img src={img} alt="" />
        </div>
        <div className="container recent">
          <div className="content grid3 mtop">
            {filterData.map((data, index) => {
              return (
                <NavLink to={`/Uproperty/${data._id}`}>
                  <div className="box shadow" key={index}>
                    <div className="img">
                      <img src={img1} alt="" />
                    </div>
                    <div className="text">
                      <div className="category flex">
                        <span
                          style={{
                            background:
                              data.rentSell === "For Sale"
                                ? "#25b5791a"
                                : "#ff98001a",
                            color:
                              data.rentSell === "For Sale"
                                ? "#25b579"
                                : "#ff9800",
                          }}
                        >
                          {data.rentSell}
                        </span>
                        <i className="fa fa-heart"></i>
                      </div>
                      <h4>{data.agencyName}</h4>
                      <p>
                        <i className="fa fa-location-dot"></i> {data.address}
                      </p>
                    </div>
                    <div className="button flex">
                      <div>
                        <span>₹{data.price}</span>{" "}
                        <label htmlFor="">/sqft</label>
                      </div>
                      <span>{data.type}</span>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FilterType;
