import React from "react";
import "./DumbNumber.css";
const DumbNumber = ({ value = 0, onIncrement, onDecrement }) => (
  <div className="number-container">
    <input
      className="number-button"
      type="button"
      value="-"
      onClick={onDecrement}
    />
    <span className="number-value">{value}</span>
    <input
      className="number-button"
      type="button"
      value="+"
      onClick={onIncrement}
    />
  </div>
);

export default DumbNumber;