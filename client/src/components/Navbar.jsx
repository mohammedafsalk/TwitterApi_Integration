import React, { useState } from "react";
import { Link as link, useNavigate } from "react-router-dom";
import { useRefresh } from "../Context/RefreshContext";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  MenuItem,
  Toolbar,
  Menu,
  Button,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import axios from "axios";
import { grey } from "@mui/material/colors";

export default function Navbar() {
  const { refresh, setRefresh } = useRefresh();

  const handleLogout = () => {
    document.cookie =
      "myCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setRefresh(!refresh);
  };

  return (
    <AppBar
      style={{
        backgroundColor: grey[100],
        boxShadow: "0px 0px 10px 3px RGBA(233, 233, 233, 0.9)",
      }}
      position="sticky"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: grey[50],
          alignItems: "center",
        }}
      >
        <IconButton>
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "black",
            }}
          >
            Tweet App
          </Typography>
        </IconButton>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

        <Button
          variant="outlined"
          sx={{ color: "black" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}