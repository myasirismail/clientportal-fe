import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import deleteIcon from "../assets/trash.svg";
import editIcon from "../assets/edit-2.svg";
import notFoundIcon from "../assets/not-found.svg";

function UseTable({ columns, rows, action = false, onDelete, onEdit, rowClick }) {
  function getNestedValue(obj, path) {
    const keys = path.split(".");
    let result = obj;
    for (let key of keys) {
      result = result?.[key];
    }
    return result;
  }
  return (
    <TableContainer>
      <Table style={{ borderCollapse: "collapse", width: "100%" }}>
        <TableHead style={{ backgroundColor: "#ece1ee" }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key} style={{ border: "1px solid #959db2", textAlign: "center" }}>
                {column.label}
              </TableCell>
            ))}
            {action && <TableCell style={{ border: "1px solid #959db2", textAlign: "center" }}>ACTION</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {columns.map((column) => (
                <TableCell key={column.key} style={{ border: "1px solid #959db2", textAlign: "center" }}>
                  {column.nested && column.clickable && column.renderCell ? (
                    <p
                      style={{
                        color: "#562583",
                        fontWeight: "500",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => rowClick(row)}
                    >
                      {column.renderCell(getNestedValue(row, column.key), row)}
                    </p>
                  ) : column.nested && column.renderCell ? (
                    column.renderCell(getNestedValue(row, column.key), row)
                  ) : column.clickable ? (
                    <p
                      style={{
                        color: "#562583",
                        fontWeight: "500",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => rowClick(row)}
                    >
                      {column.renderCell ? column.renderCell(row[column.key], row) : row[column.key]}
                    </p>
                  ) : column.renderCell ? (
                    column.renderCell(row[column.key], row)
                  ) : (
                    getNestedValue(row, column.key)
                  )}
                </TableCell>
              ))}
              {action && (
                <TableCell
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    borderBottom: "1px solid #959db2",
                    borderRight: "1px solid #959db2",
                    padding: "9px",
                  }}
                >
                  {onDelete && <img width={20} onClick={() => onDelete(row)} src={deleteIcon} />}
                  {onEdit && <img width={20} onClick={() => onEdit(row)} src={editIcon} />}
                </TableCell>
              )}
            </TableRow>
          ))}

          {rows.length === 0 && (
            <TableRow>
              <TableCell align="center" colSpan={columns.length + 1}>
                <img src={notFoundIcon} />
                <p style={{ color: "#959DB2" }}>Not Found</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UseTable;
