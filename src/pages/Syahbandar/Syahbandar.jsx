import Berlayar from "../../components/syahbandar/berlayar/berlayar";
import Data from "../../components/syahbandar/detailData";
import Kedatangan from "../../components/syahbandar/kedatangan/kedatangan";
import Logbook from "../../components/syahbandar/logbook/logbook";
import Tangkapan from "../../components/syahbandar/tangkapan/tangkapan";
// import Negara from "../../components/syahbandar/negara/negara";

const Syahbandar = () => {
  return (
    <div className="syahbandar">
      <div className="title">
        <h1><b>OVERVIEW KESYAHBANDARAN PPN PALABUHANRATU</b></h1>
        <div>Detail Data Kesyahbandaran</div>
      </div>
      <Data />
      <Logbook />
      <Kedatangan />
      <Berlayar />
      <Tangkapan />
      {/* <Negara /> */}
    </div>
  );
};

export default Syahbandar;
