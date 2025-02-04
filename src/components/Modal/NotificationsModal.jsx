import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

const notifications = [
  { date: "2024-07-01", content: "Notification 1 content goes here." },
  { date: "2024-07-02", content: "Notification 2 content goes here." },
  { date: "2024-07-03", content: "Notification 3 content goes here." },
  { date: "2024-07-01", content: "Notification 1 content goes here." },
  { date: "2024-07-02", content: "Notification 2 content goes here." },
  { date: "2024-07-03", content: "Notification 3 content goes here." },
];

const NotificationsModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="notifications-modal-title"
      aria-describedby="notifications-modal-description"
    >
      <Box sx={style}>
        <Typography id="notifications-modal-title" variant="h6" component="h2">
          Notifications
        </Typography>
        {notifications.map((notification, index) => (
          <div
            key={index}
            style={{
              marginTop: "10px",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <Typography
              style={{
                textAlign: "justify",
              }}
              variant="body2"
            >
              {notification.content}
            </Typography>
            <Typography variant="subtitle2">{notification.date}</Typography>
          </div>
        ))}
      </Box>
    </Modal>
  );
};

export default NotificationsModal;
