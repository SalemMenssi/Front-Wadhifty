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
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditUserModal from "../Modal/EditUserModal";
import DeleteUserModal from "../Modal/DeleteUserModal ";
import { deleteUser, getAllUsers } from "../../Utility/UserAPI";
import { URL } from "../../URL";

// Example data
const users = [
  {
    fullName: "Amanda Smith",
    nickname: "Mandy",
    phoneNumber: "123-456-7890",
    country: "USA",
    language: "English",
    speciality: "Software Engineering",
    email: "amanda.smith@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    cv: "https://example.com/cv/amanda-smith.pdf", // CV URL
  },
  {
    fullName: "John Doe",
    nickname: "Johnny",
    phoneNumber: "987-654-3210",
    country: "Canada",
    language: "French",
    speciality: "Data Science",
    email: "john.doe@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    cv: "https://example.com/cv/john-doe.pdf", // CV URL
  },
  {
    fullName: "Emily Johnson",
    nickname: "Em",
    phoneNumber: "456-789-0123",
    country: "UK",
    language: "English",
    speciality: "Cybersecurity",
    email: "emily.johnson@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    cv: "https://example.com/cv/emily-johnson.pdf", // CV URL
  },
  {
    fullName: "Michael Brown",
    nickname: "Mike",
    phoneNumber: "321-654-9870",
    country: "Australia",
    language: "English",
    speciality: "Cloud Computing",
    email: "michael.brown@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    cv: "https://example.com/cv/michael-brown.pdf", // CV URL
  },
  {
    fullName: "Sophia Lee",
    nickname: "Sophie",
    phoneNumber: "654-321-0987",
    country: "Singapore",
    language: "Mandarin",
    speciality: "Artificial Intelligence",
    email: "sophia.lee@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    cv: "https://example.com/cv/sophia-lee.pdf", // CV URL
  },
  {
    fullName: "Amanda Smith",
    nickname: "Mandy",
    phoneNumber: "123-456-7890",
    country: "USA",
    language: "English",
    speciality: "Software Engineering",
    email: "amanda.smith@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    cv: "https://example.com/cv/amanda-smith.pdf", // CV URL
  },
  {
    fullName: "John Doe",
    nickname: "Johnny",
    phoneNumber: "987-654-3210",
    country: "Canada",
    language: "French",
    speciality: "Data Science",
    email: "john.doe@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    cv: "https://example.com/cv/john-doe.pdf", // CV URL
  },
  {
    fullName: "Emily Johnson",
    nickname: "Em",
    phoneNumber: "456-789-0123",
    country: "UK",
    language: "English",
    speciality: "Cybersecurity",
    email: "emily.johnson@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    cv: "https://example.com/cv/emily-johnson.pdf", // CV URL
  },
  {
    fullName: "Michael Brown",
    nickname: "Mike",
    phoneNumber: "321-654-9870",
    country: "Australia",
    language: "English",
    speciality: "Cloud Computing",
    email: "michael.brown@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    cv: "https://example.com/cv/michael-brown.pdf", // CV URL
  },
  {
    fullName: "Sophia Lee",
    nickname: "Sophie",
    phoneNumber: "654-321-0987",
    country: "Singapore",
    language: "Mandarin",
    speciality: "Artificial Intelligence",
    email: "sophia.lee@example.com",
    newPassword: "",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    cv: "https://example.com/cv/sophia-lee.pdf", // CV URL
  },
];

const UserTable = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  const [Users, setUsers] = useState([]);

  useEffect(() => {
    hundlegetAllUsers();
  }, []);

  const hundlegetAllUsers = async () => {
    const data = await getAllUsers();
    setData(data.userList);
    setFilteredData(data.userList);
  };

  useEffect(() => {
    setFilteredData(
      data &&
        data.filter(
          (user) =>
            user.fullName.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [search, data]);

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

  const openEdit = (user) => {
    setSelectedUser(user);
    setOpenEditModal(true);
  };

  const openDelete = (user) => {
    setSelectedUser(user);
    setOpenDeleteModal(true);
  };

  const handleCloseEdit = () => {
    setOpenEditModal(false);
  };

  const handleCloseDelete = () => {
    setOpenDeleteModal(false);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    await hundlegetAllUsers();
    setOpenDeleteModal(false);
  };

  return (
    <div
      className="container"
      style={{ width: "95vw", margin: 0, padding: "6em 20px" }}
    >
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px" }}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Speciality</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>CV</TableCell> {/* New Column */}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData &&
              filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        src={user.avatar && `${URL}${user.avatar.url}`}
                        alt={user.fullName}
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                      />
                    </TableCell>
                    <TableCell>{user.fullName}</TableCell>
                    <TableCell>{user.speciality}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell>{user.email}</TableCell>

                    <TableCell>
                      <a
                        href={user.resume && `${URL}${user.resume.url}`}
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

                    {/* New Cell */}
                    <TableCell>
                      {/* <IconButton onClick={() => openEdit(user)}>
                        <FontAwesomeIcon icon={faEdit} />
                      </IconButton> */}
                      <IconButton onClick={() => openDelete(user)}>
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
        count={filteredData && filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {selectedUser && (
        <>
          <EditUserModal
            open={openEditModal}
            handleClose={handleCloseEdit}
            user={selectedUser}
            setUser={setSelectedUser}
          />
          <DeleteUserModal
            open={openDeleteModal}
            handleClose={handleCloseDelete}
            user={selectedUser}
            handleDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default UserTable;
