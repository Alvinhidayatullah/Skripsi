import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "ikan", label: "Jenis Ikan", minWidth: 170 },
  { id: "volume", label: "Volume/Kg", minWidth: 100 },
  { id: "nilai", label: "Nilai", minWidth: 100 },
];

function createData(ikan, volume, nilai) {
  const jenisIkan = volume / nilai;
  return { ikan, volume, nilai };
}

const rows = [
  createData("Pedang-pedang", 70, "Rp.1.321.000"),
  createData("Golok-golok", 40, "Rp.1.687.000"),
  createData("Barakuda", 120, "Rp.2.363.000"),
  createData("Madidihang", 80, "Rp.1.953.000"),
  createData("Selar betong", 194, "Rp.2.311.000"),
  createData("Layur", 150, "Rp.1.435.000"),
  createData("Cucut", 92, "Rp.721.000"),
  createData("Kuniran", 134, "Rp.1.235.000"),
  createData("Kurisi", 143, "Rp.3.091.000"),
  createData("Kembung", 189, "Rp.2.765.000"),
  createData("Tenggiri", 53, "Rp.3.852.000"),
  createData("Tongkol Lisong", 63, "Rp.4.962.000"),
  createData("Swanggi", 178, "Rp.6.546.000"),
  createData("Tuna", 72, "Rp.7.565.000"),
  createData("Layang Anggur", 121, "Rp.5.112.000"),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
