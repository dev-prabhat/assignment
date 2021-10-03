import React from "react";
import Validity from "../Validity/Validity-component";
import "./amount.css";

const Amount = () => (
  <div className="amount">
    <Validity />
    <div>
      <p className="p1">&#8377;50/month</p>
      <p className="p2">(50% off)</p>
      <p>
        <del>&#8377;98/month</del>
      </p>
    </div>
    <div>
      <p className="p">&#8377;-599</p>
    </div>
  </div>
);

export default Amount;
