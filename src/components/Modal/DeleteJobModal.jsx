import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const DeleteJobModal = ({ open, handleClose, job, deleteJob }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Job</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete the job "{job.title}"?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => deleteJob(job._id)}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteJobModal;
