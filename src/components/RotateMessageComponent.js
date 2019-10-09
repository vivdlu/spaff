import React from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";

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
