import React from "react";
// import IconScore from "../../assets/images/score.png";
// import { BiArchive, BiBarChartAlt, BiAtom } from "react-icons/bi";
import { RiBarChartFill, RiFundsBoxFill } from "react-icons/ri";
import { MdPeopleAlt, MdDocumentScanner, MdWarehouse } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillReconciliation } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const item = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapperItem">
      <div className="item styleBox" onClick={() => navigate("/Produksi")}>
        <h3>Produksi Harian</h3>
        <RiBarChartFill
          onClick={() => navigate("/Produksi")}
          className="ikon"
        />
      </div>
      <div className="item styleBox" onClick={() => navigate("/Syahbandar")}>
        <h3>Syahbandar</h3>
        <MdPeopleAlt onClick={() => navigate("/Syahbandar")} className="ikon" />
      </div>
      <div className="item styleBox" onClick={() => navigate("/Overview")}>
        <h3>PNBP</h3>
        <RiFundsBoxFill
          onClick={() => navigate("/Overview")}
          className="ikon"
        />
      </div>
      <div className="item styleBox" onClick={() => navigate("/Umum")}>
        <h3>Bagian Umum</h3>
        <MdDocumentScanner onClick={() => navigate("/Umum")} className="ikon" />
      </div>
      <div className="item styleBox" onClick={() => navigate("/Tkpu")}>
        <h3>TKPU</h3>
        <FaProjectDiagram onClick={() => navigate("/Tkpu")} className="ikon" />
      </div>
      <div className="item styleBox" onClick={() => navigate("/Fasilitas")}>
        <h3>Fasilitas</h3>
        <MdWarehouse onClick={() => navigate("/Fasilitas")} className="ikon" />
      </div>
    </div>
  );
};

export default item;
