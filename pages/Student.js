import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Student() {
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
      emailaddress: data.get("emailaddress"),
      dob: data.get("dob"),
      bloodgroup: data.get("bloodgroup"),
      fathername: data.get("fathername"),
      mothername: data.get("mothername"),
      address: data.get("address"),
      studentphoto: data.get("studentphoto"),
      coursename: data.get("coursename"),
      staffname: data.get("staffname"),
    });
  };

  const columns = [
    { field: "createdAt", headerName: "CreatedAt", width: 300 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "dob", headerName: "Dob", width: 300 },
    { field: "bloodgroup", headerName: "Bloodgroup", width: 300 },
    { field: "fathername", headerName: "Fathername", width: 300 },
    { field: "mothername", headerName: "Mothername", width: 300 },
    { field: "address", headerName: "Address", width: 300 },
    { field: "coursename", headerName: "Course Name", width: 300 },
  ];
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://61ef7787732d93001778e3c3.mockapi.io/student")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Add Student
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Student</DialogTitle>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="ame"
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="emailaddress"
            label="Email Address"
            type="text"
            id="emailaddress"
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="bloodgroup: "
            label="Blood Group: "
            type="text"
            id="bloodgroup"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="fathername: "
            label="Father Name "
            name="fathername"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="mothername"
            label="Mother Name"
            type="text"
            id="mothername"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="studentphoto"
            label="Student Photo"
            type="text"
            id="studentphoto"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="coursename"
            label="Course Name"
            name="coursename"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="staffname"
            label="Staff Name: "
            type="text"
            id="staffname "
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
