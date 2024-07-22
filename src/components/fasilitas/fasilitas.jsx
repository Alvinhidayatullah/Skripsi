import React from "react";
import TableKendaraan from "./table/kendaraan";
import TableTempat from "./table/tempat";

const fasilitas = () => {
  return (
    <div className="fasilitasComponent">
      <div className="tableContainer">
        <div className="table">
          <TableKendaraan />
        </div>
        <div className="table">
          <TableTempat />
        </div>
      </div>

      <div className="containerKolam">
        <div className="item styleBox">
          <h1>Kapasitas Ideal Kolam 1</h1>
          <div>230</div>
        </div>
        <div className="item styleBox">
          <h1>Kapasitas Ideal Kolam 2</h1>
          <div>563</div>
        </div>
        <div className="item styleBox">
          <h1>Kedalaman Kolam 1</h1>
          <div>1 M</div>
        </div>
        <div className="item styleBox">
          <h1>Kedalaman Kolam 2</h1>
          <div>2 M</div>
        </div>
      </div>
    </div>
  );
};

export default fasilitas;
