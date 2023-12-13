import React from "react";
import "./chart.css";
import Barfun from './bar';

function Chart() {
  return (
    <div className="head-container">
      <Barfun /> {/* Corrected the tag to properly render the Bar component */}
      <hr className="line" />
      <div className="bottomText">Total this month</div>
      <div className="amount1">$ 478.33</div>
      <div className="amount2">+ 2.4%</div>
      <div className="bottomText1">from last month</div>
    </div>
  );
}

export default Chart;

