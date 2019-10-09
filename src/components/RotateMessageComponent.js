import React from "react";
import {
  Snackbar,
  SnackbarContent,
  Container,
  Typography,
  IconButton
} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

function RotateMessage() {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={true}
      autoHideDuration={6000}
    >
      <SnackbarContent variant="warning" message="Please rotate your device." />
    </Snackbar>
  );
}

export default RotateMessage;
