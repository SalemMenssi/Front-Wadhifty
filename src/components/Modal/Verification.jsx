import * as React from "react";
import { useTranslation } from "react-i18next";
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
};

const Verification = ({ open, handleClose, handleSave }) => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {t("confirm_changes")}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {t("confirm_message")}
        </Typography>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button onClick={handleSave} sx={{ mt: 2 }}>
            {t("yes_save")}
          </Button>
          <Button onClick={handleClose} sx={{ mt: 2, ml: 2 }}>
            {t("cancel")}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Verification;
