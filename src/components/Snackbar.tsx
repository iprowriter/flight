import React from "react";
import { Button, Snackbar, SnackbarOrigin } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function SnackBar() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "left",
        })}
      >
        Test snackbar
      </Button>
      <Snackbar
        autoHideDuration={5000}
        open={open}
        onClose={handleClose}
        sx={{ width: "20%" }}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please select Arrival Country
        </Alert>
      </Snackbar>
    </>
  );
}
