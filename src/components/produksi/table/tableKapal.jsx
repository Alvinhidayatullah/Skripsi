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
  { id: "kapal", label: "Jenis Kapal", minWidth: 170 },
  { id: "volume", label: "Volume/Kg", minWidth: 100 },
  { id: "nilai", label: "Nilai", minWidth: 100 },
];

function createData(kapal, volume, nilai) {
  const jenisKapal = volume / nilai;
  return { kapal, volume, nilai };
}

const rows = [
  createData("Setia Bhakti", 21.28, "Rp.1.321.000"),
  createData("Maju Jaya 168", 85.234, "Rp.1.687.000"),
  createData("Bintang Mas II", 74.765, "Rp.2.363.000"),
  createData("Legi", 85.234, "Rp.1.953.000"),
  createData("Aofa 03", 74.765, "Rp.2.311.000"),
  createData("Lancar Jaya 1", 42.28, "Rp.1.435.000"),
  createData("Lebar Jaya", 53.753, "Rp.721.000"),
  createData("Bintang Utama 88", 63.233, "Rp.1.235.000"),
  createData("Permata 3", 32.533, "Rp.3.091.000"),
  createData("Jaya Mitra 7", 76.633, "Rp.2.765.000"),
  createData("Indo Marina 5", 42.632, "Rp.3.852.000"),
  createData("Indo Marina 8", 31.431, "Rp.4.962.000"),
  createData("Jaya Mitra 5", 64.87, "Rp.6.546.000"),
  createData("Jaya Mitra 2", 96.521, "Rp.7.565.000"),
  createData("Cipta Baru Jaya 89", 43.645, "Rp.5.112.000"),
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
