import React from "react";
import DiagramAlat from "./charts/alat";
import DiagramKelompok from "./charts/kelompok";
import BarKapal from "./charts/kapal";

const kedatangan = () => {
  return (
    <div className="kedatangan">
      <h1>SURAT TANDA BUKTI LAPOR KEDATANGAN</h1>
      <div className="parents">
        <div className="child">
          <h4>Alat Tangkap ikan</h4>
          <DiagramAlat />
        </div>
        <div className="child">
          <h4>Sebaran Kelompok</h4>
          <DiagramKelompok />
        </div>
        <div className="child">
          <h4>Nama Kapal</h4>
          <BarKapal />
        </div>
      </div>
    </div>
  );
};

export default kedatangan;
