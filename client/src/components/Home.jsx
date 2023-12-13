import React, { useEffect, useState } from "react";
import "../App.css";
import logo from "../assets/twitter-new-logo-8A0C4E0C58-seeklogo.com.png";

import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { AddIcCallOutlined, ExitToApp } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import PostModal from "./PostModal";
import Navbar from "./Navbar";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <Box
        marginTop={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
      >
        <Box>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", color: "white", textAlign: "center" }}
          >
            Welcome User!
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="success"
          size="medium"
          onClick={() => {
            setOpen(true);
          }}
        >
          Add Tweet
        </Button>
      </Box>
      <PostModal open={open} handleClose={handleClose} />
    </>
  );
}
