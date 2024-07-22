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
  {
    id: "name",
    label: "Nama Pengguna / Badan Usaha / Perorangan",
    minWidth: 170,
  },
  { id: "berakhir", label: "Berakhir", minWidth: 100 },
  {
    id: "lahan",
    label: "Total Lahan",
    minWidth: 170,
    align: "right",
  },
];

function createData(name, berakhir, lahan) {
  const totalLahan = berakhir / lahan;
  return { name, berakhir, lahan };
}

const rows = [
  createData("CV. DUTA RATU", "17 Feb 2025", 422),
  createData("PT. KOMISI", "15 Feb 2026", 522),
  createData("CV. SINAR PERKASA", "10 Des 2024", 423),
  createData("PT. ANTAM", "12 Okt 2026", 632),
  createData("KOSIDAH", "16 Feb 2025", 522),
  createData("CV. Matrial", "29 Okt 2024", 421),
  createData("KOMISI JAYA", "31 Mei 2024", 2.732),
  createData("PT. AGAM", "24 Okt 2024", 2.342),
  createData("PT. ALKAISAR", "01 Jan 2025", 6.445),
  createData("Aprizon", "29 Jun 2025", 4.343),
  createData("PT. SURYA ABADI", "12 Nov 2026", 5.095),
  createData("PT. SANDAR BERDIRI", "19 Jan 2024", 4.522),
  createData("KUD MANDIRI", "18 Agu 2024", 9.825),
];

export default function StickyHeadTable() {
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
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
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
