// // Build a data table using Material-UI's Table component. Populate the table with sample data and add features like sorting and pagination.

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Snowwhite", firstName: "Jon", age: 35 },
  { id: 5, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 6, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 7, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 8, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 9, lastName: "Lannister", firstName: "Jaime", age: 45 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <p>DATA TABLE</p>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}
