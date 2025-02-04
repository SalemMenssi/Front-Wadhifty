import React from "react";
import { Modal, Typography, Box, Button, Grid } from "@mui/material";

const DeleteUserModal = ({ open, handleClose, user, handleDelete }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-modal-title"
      aria-describedby="delete-modal-description"
    >
      <Box
        sx={{
          p: 4,
          maxWidth: 400,
          margin: "auto",
          bgcolor: "background.paper",
        }}
      >
        <Typography id="delete-modal-title" variant="h6" component="h2">
          Delete User
        </Typography>
        <Typography id="delete-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete {user?.fullName}?
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;
