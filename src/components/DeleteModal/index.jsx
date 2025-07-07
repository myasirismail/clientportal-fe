import * as React from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../Pages/LayoutPage/theme";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function DeleteDialogue({
  open,
  cancel,
  title,
  success,
  loader,
}) {
  const handleClose = () => {
    cancel(false);
  };

  return (
    <div>
      <Dialog fullWidth={true} maxWidth={"xs"} open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Are you sure?
        </BootstrapDialogTitle>
        <DialogContent>
          <Typography fontSize={"16px"} variant="variant2" color={"#11142D"}>
            You want to delete {title} ?
          </Typography>
        </DialogContent>
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
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              background: theme?.palette?.secondary?.main,
              height: "40px",
              borderRadius: "7px",
              marginRight: "12px",
            }}
            disabled={loader}
            onClick={success}
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
