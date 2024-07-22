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
  { id: "name", label: "Nama Kapal", minWidth: 170 },
  { id: "bayar", label: "Tanggal Bayar", minWidth: 100 },
  {
    id: "pendapatan",
    label: "Total Pendapatan",
    minWidth: 170,
  },
];

function createData(name, bayar, pendapatan) {
  const totalBayar = bayar / pendapatan;
  return { name, bayar, pendapatan };
}

const rows = [
  createData("MAJU JAYA 188", "30 Mar 2023", "Rp.9.432.211"),
  createData("MALVIN MAKMUR 5", "12 Des 2023", "Rp.5.321.331"),
  createData("SETIA BHAKTI", "29 Agu 2023", "Rp.12.322.211"),
  createData("BINTANG PERKASA", "15 Mar 2023", "Rp.3.212.211"),
  createData("INDO MARINA 8", "29 Mei 2024", "Rp.19.319.211"),
  createData("MAJU JAYA 18", "16 Jul 2023", "Rp.9.322.393"),
  createData("MISI LAUTAN MAKMUR", "09 Agu 2024", "Rp.39.432.121"),
  createData("ANUGRAH 30", "05 Jan 2024", "Rp.31.312.211"),
  createData("LAYLA MARINA III", "05 Apr 2023", "Rp.12.322.211"),
  createData("KASIH ALAM", "16 Feb 2024", "Rp.90.123.211"),
  createData("JAYA MITRA 3", "25 Feb 2023", "Rp.82.331.331"),
  createData("YONG PUTRA 17", "19 Jan 2024", "Rp.10.939.200"),
  createData("MINA JAYA", "29 Apr 2023", "Rp.12.492.989"),
  createData("CIPTA JAYA II", "23 Mei 2024", "Rp.11.842.781"),
  createData("CIPTA JAYA 88", "07 Jan 2023", "Rp.19.212.901"),
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
