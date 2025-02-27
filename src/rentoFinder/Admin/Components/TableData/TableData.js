import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";

function NewTableData(properytID, propertyTitle, propertyType, yearOfBuild) {
  return { properytID, propertyTitle, propertyType, yearOfBuild };
}

const datas = [
  NewTableData(360325, "3BHK Flat", "Flat", 2023),
  NewTableData(360326, "2BHK Apartment", "Apartment", 2022),
  NewTableData(360327, "4BHK Villa", "Villa", 2021),
];

export const TableData = () => {
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <TableHead sx={{ width: "100%" }}>
        <TableRow sx={{ borderBottom: "2px solid red" }}>
          <TableCell sx={{ padding: "1rem", textAlign: "center" }}>
            Property ID
          </TableCell>
          <TableCell sx={{ paddingLeft: "3rem", textAlign: "center" }}>
            Property Title
          </TableCell>
          <TableCell sx={{ paddingLeft: "6rem", textAlign: "center" }}>
            Property Type
          </TableCell>
          <TableCell
            sx={{
              paddingRight: "3.4rem",
              paddingLeft: "5rem",
              textAlign: "center",
            }}
          >
            Year of Build
          </TableCell>
        </TableRow>
      </TableHead>

      {/* Table Body */}
      <TableBody>
        {datas.map((data, index) => (
          <TableRow
            key={index}
            sx={{
              backgroundColor: index % 2 !== 0 ? "#E6E6ED" : "transparent",
            }}
          >
            <TableCell sx={{ padding: "1rem", textAlign: "center" }}>
              {data.properytID}
            </TableCell>
            <TableCell sx={{ paddingLeft: "2rem", textAlign: "center" }}>
              {data.propertyTitle}
            </TableCell>
            <TableCell sx={{ paddingLeft: "6rem", textAlign: "center" }}>
              {data.propertyType}
            </TableCell>
            <TableCell sx={{ padding: "1rem", textAlign: "center" }}>
              {data.yearOfBuild}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
