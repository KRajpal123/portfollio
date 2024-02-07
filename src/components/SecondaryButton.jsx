import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)({
    border:"2px solid #6b8dd6",
    padding: " 22px 48px",
    outline :"none",
    color: "white",
    "&:hover": {
        background: 'linear-gradient(to right, #667eea, 0, #6b8dd6, #8e37d7)',
        border:"none",
        color: "white",
        outline : "none",
    },
});
const SecondaryButton = ({ children, onClick }) => {
    return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default SecondaryButton;