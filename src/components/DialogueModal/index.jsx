import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";
import theme from "../../Pages/LayoutPage/theme";
import "./DialogueModal.scss";

const DialogueModal = ({
  open,
  close,
  title,
  edit = false,
  children,
  onSave,
  loader,
}) => {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="md">
      <DialogTitle
        sx={{
          fontFamily: "'Poppins', 'Public Sans', sans-serif",
          fontWeight: 500,
          fontSize: "18px",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "red",
            outline: "1px solid red",
            height: "40px",
            borderRadius: "6px",
            fontFamily: "'Poppins', 'Public Sans', sans-serif",
          }}
          onClick={close}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            background: theme.palette.secondary.main,
            height: "40px",
            borderRadius: "7px",
            marginRight: "12px",
          }}
          disabled={loader}
          onClick={() => onSave()}
        >
          {!edit ? "Add New" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogueModal;
