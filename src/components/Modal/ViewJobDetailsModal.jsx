import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Divider,
  Box,
  Paper,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMapMarkerAlt,
  faBriefcase,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { applyForJob } from "../../Utility/ApplicationsAPI";

const ViewJobDetailsModal = ({ user, open, handleClose, job }) => {
  const handleApply = async () => {
    await applyForJob({ jobId: job._id, userId: user._id });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <DialogTitle>
          <Typography variant="h5" fontWeight="bold" color="primary">
            {job.company}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <FontAwesomeIcon icon={faMapMarkerAlt} color="#FF5733" />
            <Typography variant="subtitle1" color="textSecondary">
              {job.location}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <FontAwesomeIcon icon={faBriefcase} color="#007BFF" />
            <Typography variant="subtitle1" color="textSecondary">
              {job.category}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <FontAwesomeIcon icon={faCalendarAlt} color="#28A745" />
            <Typography variant="subtitle2" color="textSecondary">
              Posted on: {new Date(job.postedAt).toLocaleDateString()}
            </Typography>
          </Box>

          <Divider />

          <Typography
            variant="body1"
            style={{ marginTop: "15px", lineHeight: 1.6 }}
          >
            {job.description}
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleApply} variant="contained" color="success">
            Apply Now
          </Button>

          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>
  );
};

export default ViewJobDetailsModal;
