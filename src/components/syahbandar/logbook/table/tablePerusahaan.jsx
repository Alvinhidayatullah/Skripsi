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
  { id: "perusahaan", label: "Nama Perusahaan", minWidth: 170 },
  { id: "berat", label: "Berat Ikan", minWidth: 100 },
];

function createData(perusahaan, berat) {
  const namaPerusahaan = perusahaan / berat;
  return { perusahaan, berat };
}

const rows = [
  createData("SURYA ABADI", 70),
  createData("INTI MARINA BERKARYA, PT", 40),
  createData("MULTI SAMUDERA FISHINDO, PT", 120),
  createData("INTI MARINA BERKARYA, PT", 80),
  createData("ANGGA", 194),
  createData("RAHMAT", 150),
  createData("SUNANDANG", 92),
  createData("IRA IRAWAN", 134),
  createData("GANDA", 143),
  createData("MUKITO", 189),
  createData("LIANA", 53),
  createData("SUKARYO", 63),
  createData("AGUS", 178),
  createData("RIVALDI", 72),
  createData("DAMAR", 121),
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
