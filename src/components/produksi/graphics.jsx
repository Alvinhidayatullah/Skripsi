import React from "react";
import BarVolume from "./chart/barVolume";
import BarKapal from "./chart/barKapal";
import Pieikan from "./chart/pieIkan";
import PieTangkap from "./chart/pieTangkap";
import TableKapal from "./table/tableKapal";
import TableIkan from "./table/tableIkan";

const graphics = () => {
  return (
    <div className="grafik">
      <div className="item">
        <div>
          <h4>Volume Produksi Harian (kg)</h4>
        </div>
        <BarVolume />
      </div>
      <div className="item">
        <div>
          <h4>Frekuensi Kapal</h4>
        </div>
        <BarKapal />
      </div>
      <div className="item">
        <h4>Rasio Jenis Ikan</h4>
        <Pieikan />
      </div>
      <div className="item">
        <h4>Rasio Alat Tangkap</h4>
        <PieTangkap />
      </div>
      <div className="item">
        <h4>Volume dan Nilai Per Jenis Ikan</h4>
        <TableIkan />
      </div>
      <div className="item">
        <h4>Volume dan Nilai Per jenis Kapal</h4>
        <TableKapal />
      </div>
    </div>
  );
};

export default graphics;
