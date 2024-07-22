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
  { id: "name", label: "Nama kapal", minWidth: 170 },
  { id: "alat", label: "Alat Pancing Ikan", minWidth: 100 },
  { id: "setor", label: "Tanggal Setor", minWidth: 100 },
  { id: "nilai", label: "Nilai Setor", minWidth: 100 },
];

function createData(name, alat, setor, nilai) {
  const namaKapal = name / alat;
  return { name, alat, setor, nilai };
}

const rows = [
  createData("JAYA MITRA 7", "Rawai Tuna", "14 Jun 2023", "Rp.21.321.000"),
  createData("ANUGRAH 30", "Rawai Tuna", "29 Agu 2023", "Rp.38.876.000"),
  createData("SAMUDRA JAYA 88", "Pancing Ulur Tuna", "19 Jun 2023", "Rp.91.543.000"),
  createData("JAYA MITRA 3", "Pukat Cincing Pelagis", "19 Nov 2023", "Rp.31.685.000"),
  createData("JAYA MITRA 2", "Pukat Cincing Pelagis", "26 Des 2023", "Rp.18.597.000"),
  createData("MAJU JAYA 188", "Pancing Ulur Tuna", "16 Agu 2023", "Rp.32.653.000"),
  createData("MALVIN MAKMUR 5", "Pukat Cincing Pelagis", "28 Apr 2023", "Rp.23.755.000"),
  createData("SETIA BHAKTI", "Pukat Cincing Pelagis", "24 Jul 2023", "Rp.12.325.000"),
  createData("BINTANG PERKASA", "Pancing Ulur Tuna", "15 Nov 2023", "Rp.54.322.000"),
  createData("INDO MARINA 8", "Pancing Ulur Tuna", "19 Jan 2023", "Rp.32.432.000"),
  createData("MAJU JAYA 18", "Pukat Cincing Pelagis", "27 Agu 2023", "Rp.31.534.000"),
  createData("MISI LAUTAN MAKMUR", "Pukat Cincing Pelagis", "29 Agu 2023", "Rp.67.941.000"),
  createData("ANUGRAH 30", "Pancing Ulur Tuna", "15 Mar 2023", "Rp.1.321.000"),
  createData("LAYLA MARINA III","Pukat Cincing Pelagis", "16 Jan 2023", "Rp.2.344.000"),
  createData("KASIH ALAM", "Pukat Cincing Pelagis", "29 Agu 2023", "Rp.21.321.000"),
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
