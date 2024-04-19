import React from "react";
import { NavLink } from "react-router-dom";
import { footer } from "../Data";
import "./Footer.css";
import img from '../images/logo2.png'

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <NavLink to="/contact">
              <button className="btn5">Contact Us Today</button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box1">
            <div className="logo">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="box1">
            <h1>Search Your Next Home</h1>
            <p className="p">Find new & featured property located in your local city.</p>
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 Real Estate. Developed By Adil Rose</span>
      </div>
    </>
  );
};

export default Footer;
