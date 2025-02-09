"use client"

import { Button, CircularProgress } from "@mui/material";
import * as PropTypes from "prop-types";


const UIButton = ({
    children,
    variant = "contained",
    isLoading = false,
    sans = false,
    size = "large",
    startIcon = null,
    rounded = false,
    sx = {},
    btnColor,
    ...otherProps
}) => {
    const loaderColor = variant === "contained" ? "common" : "primary";

    return (
        <Button
            rounded={rounded}
            size={size}
            sx={{ ...sx }}
            variant={variant}
            startIcon={isLoading ? <CircularProgress size="0.7rem" color={loaderColor} pr="0.4rem" /> : startIcon}
            btnColor={btnColor}
            disabled={isLoading}
            {...otherProps}
        >
            {children}
        </Button>
    );
};

export default UIButton;


UIButton.propTypes = {
    sx: PropTypes.object,
    sans: PropTypes.bool,
    size: PropTypes.string,
    rounded: PropTypes.bool,
    children: PropTypes.any,
    isLoading: PropTypes.bool,
    startIcon: PropTypes.node,
    variant: PropTypes.string,
    btnColor: PropTypes.string,
};
