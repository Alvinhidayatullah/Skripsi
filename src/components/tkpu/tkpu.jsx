import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { HiMiniHomeModern } from "react-icons/hi2";
import { GiLightningHelix } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiWater } from "react-icons/bi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import TableKapal from "./table/kapal";
import TablePengguna from "./table/pengguna";

const tkpu = () => {
  return (
    <div className="tkpuComponent">
      <div className="waktu">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker
              localeText={{ start: "Tanggal Mulai", end: "Tanggal Akhir" }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <br />
      <div className="tableKapal">
        <TableKapal />
      </div>

      <div className="containerLayanan">
        <div className="item styleBox">
          <HiMiniHomeModern style={{ fontSize: "50px" }} className="ikon" />
          <h1>Unit Pengolahan Hasil Perikanan di WKOPP</h1>
          <h4>10</h4>
        </div>
        <div className="item styleBox">
          <GiLightningHelix
            style={{ fontSize: "50px", marginTop: "10px" }}
            className="ikon"
          />
          <h1>Pelayanan Listrik (kwh)</h1>
          <h4>7.392</h4>
        </div>
        <div className="item styleBox">
          <SiHomeassistantcommunitystore
            style={{ fontSize: "50px", marginTop: "13px" }}
            className="ikon"
          />
          <h1>Pedagang & Industri</h1>
          <h4>328</h4>
        </div>
        <div className="item styleBox">
          <BiWater
            style={{ fontSize: "55px", marginTop: "7px" }}
            className="ikon"
          />
          <h1>Pelayanan Air</h1>
          <h4>312.442</h4>
        </div>
        <div className="item styleBox">
          <BsFillFuelPumpFill
            style={{ fontSize: "50px", marginTop: "15px" }}
            className="ikon"
          />
          <h1>Pelayanan BBM (Lt)</h1>
          <h4>323.435</h4>
        </div>
      </div>

      <h1
        style={{
          fontWeight: "300",
          textAlign: "center",
          marginTop: "30px",
          fontSize: "2rem",
        }}
      >
        Lahan dan Bangunan
      </h1>

      <div className="form">
        <div className="item styleBox">
          <MdEditDocument
            style={{ fontSize: "50px", marginTop: "2px" }}
            className="ikon"
          />
          <div>Form Permohonan</div>
        </div>
        <div className="item styleBox">
          <RiCustomerService2Fill
            style={{ fontSize: "50px", marginTop: "2px" }}
            className="ikon"
          />
          <div>Alur Pelayanan</div>
        </div>
      </div>
      <div className="tablePengguna">
        <TablePengguna />
      </div>
      <div className="containerLahan">
        <div className="item styleBox">
          <h1>Pemanfaatan Lahan (m2) :</h1>
          <div>38.321</div>
        </div>{" "}
        <div className="item styleBox">
          <h1>Ketersediaan Lahan (m2) :</h1>
          <div>43.932</div>
        </div>
      </div>
    </div>
  );
};

export default tkpu;
