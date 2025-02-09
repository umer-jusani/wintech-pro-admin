import { Alert, Snackbar } from "@mui/material";

const ToastContainer = ({ open, currentToast, onClose, onExited }) => {
    return (
        <Snackbar open={open} autoHideDuration={2500} onClose={onClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <Alert onClose={onClose} variant="filled" severity={currentToast?.severity || "info"} sx={{ color: "white" }}>
                {currentToast?.message}
            </Alert>
        </Snackbar>
    );
};

export default ToastContainer;