import React, { useState } from "react";
import { Link as link, useNavigate } from "react-router-dom";
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
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

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

        <Button variant="outlined" sx={{ color: "black" }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
