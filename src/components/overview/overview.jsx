import React from "react";
import BarGraph from "./bar";
import Table from "./table";

const overview = () => {
  return (
    <div className="overviewComponent">
      <h1
        style={{ fontWeight: "300", fontSize: "1.5rem", textAlign: "center" }}
      >
        PNBP SDA PASCA PRODUKSI
      </h1>
      <div className="container">
        <div className="item ">
          <Table />
        </div>
        <div className="item">
          <BarGraph />
        </div>
      </div>
      <div className="containerValue">
        <div className="item styleBox">
          <h1>Jumlah Kapal</h1>
          <div>321</div>
        </div>
        <div className="item styleBox">
          <h1>Nilai PNBP</h1>
          <div>3.353.432.211</div>
        </div>
      </div>
    </div>
  );
};

export default overview;
