import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Course() {
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
      coursename: data.get("coursename"),
      staffname: data.get("staffname"),
    });
  };

  const columns = [
    { field: "coursename", headerName: "Course Name", width: 300 },
    { field: "id", headerName: "Id", width: 300 },
    { field: "staffName", headerName: "Staff Name", width: 600 },
  ];

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://61ef7787732d93001778e3c3.mockapi.io/course")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ height: 700, width: "100%" }}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add Course
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Course</DialogTitle>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="coursename"
            label="Course Name"
            name="coursename"
            autoFocus
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">staff Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="staff Name"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </Box>
      </Dialog>

      <DataGrid rows={tableData} columns={columns} pageSize={12} />
    </div>
  );
}
