import React from "react";
import "./payCheck.css";
import { useState } from "react";
import Amount from "../Amount/Amount-component";

const PayCheck = () => {
  const [data] = useState({
    id1: "Get the Test Series With Special Discount and ",
    id2: "Start Your Journey of Success",
    id3: "Package Include",
    id4: "Test Series"
  });

  const { id1, id2, id3, id4 } = data;

  return (
    <div className="pay-check">
      <div className="discount">
        <p className="special">
          {id1}
          <br />
          {id2}
        </p>
      </div>
      <Amount />
      <div className="Flex">
        <p>
          {id3}
          <br />
          {id4}
        </p>
        <div className="flex-item">
          <div className="flex-Container">
            <div>SubTotal</div>
            <div>&#8377;599</div>
            <div>-&#8377;599</div>
          </div>
          <div className="flex-Container">
            <div>TOTAL AMOUNT</div>
            <div>&#8377;599</div>
            <div>
              <button className="btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayCheck;
