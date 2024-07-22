import React from "react";
import { GiLuckyFisherman } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";
import { MdStackedBarChart, MdDirectionsBoatFilled } from "react-icons/md";

const data = () => {
  return (
    <div className="wrapperItem">
      <div className="item styleBox">
        <GiProgression
          style={{ fontSize: "45px", marginTop: "2px" }}
          className="ikon"
        />
        <h5>Nilai Produksi</h5>
        <h4>Rp16.779.495.000</h4>
      </div>
      <div className="item styleBox">
        <GiLuckyFisherman
          style={{ fontSize: "45px", marginTop: "2px" }}
          className="ikon"
        />
        <h5>Jumlah Nelayan</h5>
        <h4>458</h4>
      </div>

      <div className="item styleBox">
        <MdStackedBarChart
          style={{ fontSize: "52px", marginTop: "2px" }}
          className="ikon"
        />
        <h5>Volume Produksi (kg)</h5>
        <h4>815.865</h4>
      </div>
      <div className="item styleBox">
        <MdDirectionsBoatFilled
          style={{ fontSize: "45px", marginTop: "2px" }}
          className="ikon"
        />
        <h5>Jumlah Kapal</h5>
        <h4>138</h4>
      </div>
    </div>
  );
};

export default data;
