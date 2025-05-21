import React from "react";
import { useTranslation } from "react-i18next";
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
import { useEffect } from "react";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const ViewJobDetailsModal = ({ user, open, handleClose, job }) => {
  const { t } = useTranslation(); // Initialize translation hook
  const [isAuth, setIsAuth] = useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const isAuthchek = async () => {
    const token = await localStorage.getItem("authToken");
    setIsAuth(token ? true : false);
  };
  const handleApply = async () => {
    try {
      await applyForJob({ jobId: job._id, userId: user._id });
      setOpenSnackbar(true); // Show success snackbar
    } catch (error) {
      console.error("Application failed:", error);
    }
  };

  useEffect(() => {
    isAuthchek();
  }, [isAuth]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {t("applied_successfully")} {/* Add this key to your i18n files */}
        </Alert>
      </Snackbar>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <DialogTitle>
          <Typography variant="h5" fontWeight="bold" color="primary">
            {t("job_details")}
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
              {t("posted_on")}: {new Date(job.postedAt).toLocaleDateString()}
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
          {isAuth && (
            <Button onClick={handleApply} variant="contained" color="success">
              {t("apply_now")}
            </Button>
          )}
          <Button onClick={handleClose} variant="contained" color="primary">
            {t("close")}
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>
  );
};

export default ViewJobDetailsModal;
