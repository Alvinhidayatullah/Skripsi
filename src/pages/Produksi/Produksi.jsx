import React from "react";

import Data from "../../components/produksi/data";
import Graphics from "../../components/produksi/graphics";
import Logistik from "../../components/produksi/logistik";
import Pelayanan from "../../components/produksi/pelayanan";

const Nilai = () => {
  return (
    <div className="produksiPages">
      <div className="title">
        <h1>
          <b>DATA OPERASIONAL PPN PALABUHANRATU</b>
        </h1>
        <div>Jumlah Produksi Penangkapan Harian</div>
      </div>
      <Data />
      <Graphics />
      <Logistik />
      <Pelayanan />
    </div>
  );
};

export default Nilai;
