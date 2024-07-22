import Table from "./table";
import Chart from "./chart";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const logbook = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="logbook">
      <div className="parents">
        <div className="child" style={{ height: "400px" }}>
          <Chart />
        </div>
        <div className="child">
          <div className="table">
            <Table />
          </div>
          <div className="select">
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Select
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Select"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Pegawai">Pegawai</MenuItem>
                <MenuItem value="Barang">Barang</MenuItem>
                <MenuItem value="Modal">Modal</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="data styleBox">
            <h1>Pagu : Rp17.349.747.000 </h1>
          </div>
          <div className="data styleBox">
            <h1>Realisasi: Rp11.154.470.282 </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default logbook;
