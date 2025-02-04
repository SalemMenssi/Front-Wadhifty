import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Input,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const EditUserModal = ({ open, handleClose, user, setUser }) => {
  const [formData, setFormData] = useState({ ...user });
  const [avatarFile, setAvatarFile] = useState(null);
  const [cvFile, setCvFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
      setAvatarFile(file);
    }
  };

  const handleCvChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCvFile(file);
      setFormData({ ...formData, cv: file });
    }
  };

  const handleSave = () => {
    // Add save functionality here
    setUser(formData); // Update user in the parent component
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 600,
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 2,
          mx: "auto",
          my: 1,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Edit User
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={formData.avatar}
            alt={formData.fullName}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            sx={{ display: "none" }}
            id="avatar-file-input"
          />
          <label htmlFor="avatar-file-input">
            <Button variant="contained" component="span">
              Upload Avatar
            </Button>
          </label>
        </Box>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Speciality"
          name="speciality"
          value={formData.speciality}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">Upload CV (PDF)</Typography>
          <Input
            type="file"
            accept=".pdf"
            onChange={handleCvChange}
            sx={{ display: "block", mt: 1 }}
          />
        </Box>
        <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
