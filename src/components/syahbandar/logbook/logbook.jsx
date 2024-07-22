import React from "react";

import DiagramAlat from "./charts/alat";
import BarDokumen from "./charts/dokumen";
import DiagramJenis from "./charts/jenis";
import DiagramKelompok from "./charts/kelompok";
import TablePerusahaan from "./table/tablePerusahaan";
import { Bar } from "@nivo/bar";

const logBook = () => {
  return (
    <div className="logbook">
      <h1>Detail Logbook</h1>
      <div className="parents">
        <div className="child">
          <h4>Jumlah Dokumen</h4>
          <BarDokumen />
        </div>
        <div className="child">
          <h4>Alat Tangkap Ikan</h4>
          <DiagramAlat />
        </div>
        <div className="child">
          <h4>Sebaran Kelompok</h4>
          <DiagramKelompok />
        </div>
        <div className="child">
          <h4>Sebaran Jenis Ikan</h4>
          <DiagramJenis />
        </div>
        <div className="child">
          <TablePerusahaan />
        </div>
      </div>
    </div>
  );
};

export default logBook;
