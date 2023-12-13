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

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{

  },[])
 
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        gap={5}
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
        <Box
          width={400}
          height={400}
          p={2}
          display={"flex"}
          flexDirection={"column"}
          border={1}
          borderRadius={8}
        >
          <Box display={"flex"} justifyContent={"space-around"}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Avatar src={logo} />
            <Button variant="contained">Logout</Button>
          </Box>
          <Box
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            maxWidth={300}
            margin="auto"
          >
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
        </Box>
      </Box>
      <PostModal open={open} handleClose={handleClose} />
    </>
  );
}
