import React from "react";
import "./validity.css";

const Validity = () => (
  <div className="validity">
    <div className="tick">&#x2705;</div>
    <div className="validity1">
      <p>&#x2705; Mock Tests</p>
      <p>&#x2705; Sectional Tests</p>
      <p>&#x2705; Advance Tests</p>
      <p>&#x2705; Pervious Year Paper</p>
      <p>&#x2705; Quizzes</p>
    </div>
    <div className="validity2">
      <h3>
        TEST SERIES <span className="i">i</span>
      </h3>
      <h5>Jawahar Navodaya Entrance 365</h5>
      <h6>Validity</h6>
      <select name="cars" id="days">
        <option value="365">365 days</option>
        <option value="180">180 days</option>
        <option value="90">90 days</option>
        <option value="30">30 days</option>
      </select>
    </div>
  </div>
);

export default Validity;
