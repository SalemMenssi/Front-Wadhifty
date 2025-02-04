import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import DeleteJobModal from "../Modal/DeleteJobModal";
import ViewJobDetailsModal from "../Modal/ViewJobDetailsModal";
import EditJobModal from "../Modal/EditJobModal";
import CreateJobModal from "../Modal/CreateJobModal";
import {
  addJob,
  deleteJob,
  getAllJobs,
  updateJob,
} from "../../Utility/JobsAPI";

// Example data
const initialJobs = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Develop and maintain software applications.",
    company: "TechCorp",
    location: "New York, NY",
    salary: "$120,000",
    applicants: [
      { fullName: "Amanda Smith", email: "amanda.smith@example.com" },
      { fullName: "John Doe", email: "john.doe@example.com" },
      { fullName: "Amanda Smith", email: "amanda.smith@example.com" },
      { fullName: "John Doe", email: "john.doe@example.com" },
      { fullName: "Amanda Smith", email: "amanda.smith@example.com" },
      { fullName: "John Doe", email: "john.doe@example.com" },
      { fullName: "Amanda Smith", email: "amanda.smith@example.com" },
      { fullName: "John Doe", email: "john.doe@example.com" },
    ],
  },
  {
    id: 2,
    title: "Data Scientist",
    description: "Analyze and interpret complex data sets.",
    company: "DataInc",
    location: "San Francisco, CA",
    salary: "$130,000",
    applicants: [
      { fullName: "Emily Johnson", email: "emily.johnson@example.com" },
      { fullName: "Michael Brown", email: "michael.brown@example.com" },
    ],
  },
];

const JobTable = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [search, setSearch] = useState("");

  const hundlegetAllJobs = async () => {
    const data = await getAllJobs();
    setJobs(data);
  };
  useEffect(() => {
    hundlegetAllJobs();
    setFilteredJobs(
      jobs.filter((job) =>
        job.company.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, jobs]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const openCreate = () => {
    setOpenCreateModal(true);
  };

  const openEdit = (job) => {
    setSelectedJob(job);
    setOpenEditModal(true);
  };

  const openDetails = (job) => {
    setSelectedJob(job);
    setOpenDetailsModal(true);
  };

  const openDelete = (job) => {
    setSelectedJob(job);
    setOpenDeleteModal(true);
  };

  const handleCloseCreate = () => {
    setOpenCreateModal(false);
  };

  const handleCloseEdit = () => {
    setOpenEditModal(false);
  };

  const handleCloseDetails = () => {
    setOpenDetailsModal(false);
  };

  const handleCloseDelete = () => {
    setOpenDeleteModal(false);
  };

  const handleCreateJob = async (newJob) => {
    await addJob(newJob);
    await getAllJobs();
    setOpenCreateModal(false);
  };

  const handleEditJob = async (id, UpdatedJob) => {
    await updateJob(id, UpdatedJob);
    await getAllJobs();
    setOpenEditModal(false);
  };

  const handleDeleteJob = async (id) => {
    await deleteJob(id);
    await getAllJobs();
    setOpenDeleteModal(false);
  };

  return (
    <div
      className="container"
      style={{ width: "95vw", margin: 0, padding: "6em 20px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          style={{ marginBottom: "20px", width: "30%" }}
        />
        <Button
          variant="contained"
          onClick={openCreate}
          startIcon={<FontAwesomeIcon icon={faPlus} />}
          style={{ marginBottom: "20px" }}
        >
          Create Job
        </Button>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredJobs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((job) => (
                <TableRow key={job._id}>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.category}</TableCell>
                  <TableCell>
                    {new Date(job.postedAt).toLocaleString("en-US", {
                      timeZone: "UTC",
                    })}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => openDetails(job)}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </IconButton>
                    <IconButton onClick={() => openEdit(job)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </IconButton>
                    <IconButton onClick={() => openDelete(job)}>
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
        count={filteredJobs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {openCreateModal && (
        <CreateJobModal
          open={openCreateModal}
          handleClose={handleCloseCreate}
          createJob={handleCreateJob}
        />
      )}

      {selectedJob && (
        <>
          <EditJobModal
            open={openEditModal}
            handleClose={handleCloseEdit}
            job={selectedJob}
            editJob={handleEditJob}
          />
          <ViewJobDetailsModal
            open={openDetailsModal}
            handleClose={handleCloseDetails}
            job={selectedJob}
          />
          <DeleteJobModal
            open={openDeleteModal}
            handleClose={handleCloseDelete}
            job={selectedJob}
            deleteJob={handleDeleteJob}
          />
        </>
      )}
    </div>
  );
};

export default JobTable;
