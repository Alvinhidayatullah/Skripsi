import React from "react";
import DiagramAlat from "./charts/alat";
// import DiagramKelompok from "./charts/kelompok";
import BarKapal from "./charts/kapal";
import Sebaran from "./table/sebaran";

const tangkapan = () => {
  return (
    <div className="berlayar">
      <h1>SERTIFIKAT HASIL TANGKAPAN IKAN</h1>
      <div className="parents">
        <div className="child">
          <h4>Alat Tangkap ikan</h4>
          <DiagramAlat />
        </div>
        <div className="child">
          <h4>Berat (Ton)</h4>
          <BarKapal />
        </div>
        <div className="item">
          <h4>Sebaran Negara Tujuan</h4>
          <Sebaran />
        </div>
      </div>
    </div>
  );
};

export default tangkapan;
