import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

export default function Staff() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      mobile: data.get("mobile"),
      dob: data.get("dob"),
    });
  };

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "mobile", headerName: "Mobile", width: 300 },
    { field: "dob", headerName: "Dob", width: 300 },
    { field: "id", headerName: "Id", width: 300 },
  ];

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://61ef7787732d93001778e3c3.mockapi.io/Staff")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Add Staff
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Staff</DialogTitle>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
            type="text"
            id="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Mobile"
            name="mobile"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="dob"
            label="Dob"
            name="dob"
            autoFocus
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" >
              Submit
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
      <DataGrid rows={tableData} columns={columns} pageSize={12} />
    </div>
  );
}
