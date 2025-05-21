import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  deleteApplication,
  getAllApplications,
  updateApplicationStatus,
} from "../../Utility/ApplicationsAPI";
import { URL } from "../../URL";

const ApplicationsTable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleGetAllApps = async () => {
    const fetchedData = await getAllApplications();
    setData(fetchedData);
  };
  useEffect(() => {
    handleGetAllApps();
    console.log(data);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((app) =>
      app.job.company.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (id) => {
    await deleteApplication(id);
    await handleGetAllApps();
    setData((prevData) => prevData.filter((app) => app._id !== id));
  };

  const handleStatusChange = async (id, newStatus) => {
    await updateApplicationStatus(id, { status: newStatus });
    await handleGetAllApps();
    setData((prevData) =>
      prevData.map((app) =>
        app._id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case "Pending":
        return "#f0ad4e"; // Yellow
      case "Reviewed":
        return "#5bc0de"; // Blue
      case "Accepted":
        return "#5cb85c"; // Green
      case "Rejected":
        return "#d9534f"; // Red
      default:
        return "#fff"; // White for default
    }
  };

  return (
    <div
      className="container"
      style={{ width: "95vw", margin: 0, padding: "6em 20px" }}
    >
      <TextField
        label="Search by Company"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1em" }}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>CV</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((app) => (
                <TableRow
                  key={app._id}
                  style={{
                    backgroundColor: getStatusBackgroundColor(app.status),
                    border: "none", // Removes border
                  }}
                >
                  <TableCell>{app.user && app.user.fullName}</TableCell>
                  <TableCell>{app.user && app.user.phoneNumber}</TableCell>
                  <TableCell>{app.job.company}</TableCell>
                  <TableCell>
                    <Select
                      value={app.status}
                      onChange={(e) =>
                        handleStatusChange(app._id, e.target.value)
                      }
                    >
                      {["Pending", "Reviewed", "Accepted", "Rejected"].map(
                        (status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </TableCell>

                  <TableCell>
                    <a
                      href={`${URL}${
                        app.user && app.user.resume && app.user.resume.url
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#007bff", // Blue color
                        textDecoration: "none", // Remove underline
                        padding: "5px 10px", // Padding around the link
                        borderRadius: "5px", // Rounded corners
                        backgroundColor: "#f0f8ff", // Light blue background
                        fontWeight: "bold", // Make the text bold
                        transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover effect
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#007bff"; // Change background on hover
                        e.target.style.color = "#fff"; // Change text color on hover
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#f0f8ff"; // Reset background
                        e.target.style.color = "#007bff"; // Reset text color
                      }}
                    >
                      View CV
                    </a>
                  </TableCell>

                  <TableCell>
                    <IconButton onClick={() => handleDelete(app._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default ApplicationsTable;
