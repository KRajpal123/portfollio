import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)({
    background: 'linear-gradient(to right, #667eea, 0, #6b8dd6, #8e37d7)',
    padding: " 22px 48px",
    outline :"none",
    color: "white",
    transition: ".5s ease-in-out",
    "&:hover": {
        background: 'linear-gradient(to left, #667eea, 0, #6b8dd6, #8e37d7)',
        color: "white",
        outline : "none",
    },
});

const PrimaryButton = ({ children, onClick }) => {
    return <CustomButton onClick={onClick}>{children}</CustomButton>;
};
export default PrimaryButton;