import React from "react";
// import IconScore from "../../assets/images/score.png";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { FaDiceD6 } from "react-icons/fa6";
import { PiGasCanFill } from "react-icons/pi";
import { MdWaterDrop } from "react-icons/md";
import { RiOilFill } from "react-icons/ri";

const Logistik = () => {
  return (
    <div className="logisticComponent">
      <h2>Logistik</h2>
      <div className="parents">
        <div className="child">
          <GiBoxUnpacking
            style={{ fontSize: "45px", marginTop: "2px" }}
            className="ikon"
          />
          <h3>Rp.437.210.000</h3>
          <h6>Sembako</h6>
        </div>
        <div className="child">
          <FaGasPump
            style={{ fontSize: "40px", marginTop: "10px" }}
            className="ikon"
          />
          <h3>43.332</h3>
          <h6>Bensin (Lt)</h6>
        </div>
        <div className="child">
          <FaDiceD6
            style={{ fontSize: "40px", marginTop: "10px" }}
            className="ikon"
          />
          <h3>931.322</h3>
          <h6>Es (Kg)</h6>
        </div>
        <div className="child">
          <PiGasCanFill
            style={{ fontSize: "40px", marginTop: "10px" }}
            className="ikon"
          />
          <h3>432</h3>
          <h6>Gas (Kg)</h6>
        </div>
        <div className="child">
          <MdWaterDrop
            style={{ fontSize: "40px", marginTop: "15px" }}
            className="ikon"
          />
          <h3>43.411</h3>
          <h6>Air (Lt)</h6>
        </div>
        <div className="child">
          <RiOilFill
            style={{ fontSize: "40px", marginTop: "25px" }}
            className="ikon"
          />
          <h3>13.831</h3>
          <h6>Oli (Lt)</h6>
        </div>
      </div>
    </div>
  );
};

export default Logistik;
