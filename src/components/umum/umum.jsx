import Logbook from "./logbook/logbook";
import Kepegawaian from "./kepegawaian/kepegawaian";

const umum = () => {
  return (
    <div className="umumComponent">
      <h1
        style={{ fontWeight: "300", textAlign: "center", fontSize: "1.8rem" }}
      >
        Detail Logbook
      </h1>
      <Logbook />
      <Kepegawaian />
    </div>
  );
};

export default umum;
