import React from "react";
import ChartSatu from "./chartSatu";
import ChartDua from "./chartDua";
import BarResponsive from './bar'

const kepegawaian = () => {
  return (
    <div className="kepegawaian">
        <h1 style={{ textAlign:"center",fontWeight:"300", fontSize:"2rem" }}>Komposisi Kepegawaian</h1>
      <div className="parents">
        <div className="child">
          <ChartSatu />
        </div>
        <div className="child">
          <ChartDua />
        </div>
        <div className="child">
            <BarResponsive/>
        </div>
      </div>
    </div>
  );
};

export default kepegawaian;
