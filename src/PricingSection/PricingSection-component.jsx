import React from "react";
import PayCheck from "./Paycheck/Paycheck-component";
import "./pricingSection.css";

const PricingSection = () => (
  <div className="pricing-section">
    <div>
      <h1>Unlock Test Packages on 50% Discount</h1>
      <p>
        Do yourself a favor , start practising more with India's Best Online
        Test Series
      </p>
    </div>
    <div>
      <h3>Jawahar Navodaya Entrance Exam</h3>
      <PayCheck />
    </div>
  </div>
);

export default PricingSection;
