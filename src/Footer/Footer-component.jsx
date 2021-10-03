import React from "react";
import AppDescription from "./AppDescription/AppDescription-component";
import "./footer.css";
import KeyFeature from "./KeyFeature/KeyFeature-component";

const Footer = () => (
  <div className="footer">
    <KeyFeature />
    <AppDescription />
  </div>
);

export default Footer;
