import React from "react";
import MyComponent from "../../GoogleStore";
import "./aboutUs.css";

const AboutUs = () => (
  <div className="about-us">
    <div>
      <h4>EDUGORILLA</h4>
      <h4>Mail:</h4> <p>testseries@edugorilla.com</p>
      <h4>Follow Us On</h4>
      <p className="fa fa-facebook"></p>
      <p className="fa fa-twitter"></p>
      <p className="fa fa-youtube"></p>
      <p className="fa fa-linkedin"></p>
      <p className="fa fa-instagram"></p>
    </div>
    <div>
      <h4>ABOUT</h4>
      <p>About Us</p>
      <p>Impact Stories</p>
      <p>Media</p>
    </div>
    <div>
      <h4>HELP</h4>
      <p>Contact</p>
      <p>Career With Us</p>
      <p>Exam Calender</p>
      <p>Support</p>
    </div>
    <div>
      <h4>STUDENT</h4>
      <p>List of Coachings</p>
      <p>List of Schools</p>
      <p>Forum</p>
      <p>All Careers</p>
    </div>
    <div>
      <h4>BUSINESS</h4>
      <p>Your Own Online Series Portal</p>
      <h4>Download Our App</h4>
      <MyComponent />
    </div>
  </div>
);

export default AboutUs;
