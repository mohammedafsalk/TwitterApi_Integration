import React, { useEffect, useState } from "react";
import "../App.css";

import { Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import PostModal from "./PostModal";
import Navbar from "./Navbar";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [cookie, setCookie] = useState("");

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const name = params.get("name") ? decodeURIComponent(params.get("name")) : "";
  const profile_image_url = params.get("profile_image_url")
    ? decodeURIComponent(params.get("profile_image_url"))
    : "";

  useEffect(() => {
    console.log("Name:", name);
    console.log("Profile Image URL:", profile_image_url);
  }, [name, profile_image_url]);

  useEffect(() => {
    const getCookie = (cookieName) => {
      const name = cookieName + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(";");
      let cookie = cookieArray[0].trim();
      return cookie.substring(name.length, cookie.length);
    };

    const myCookieValue = getCookie("myCookie");
    setCookie(myCookieValue);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar cookie={cookie} />
      <Box
        marginTop={10}
        display="flex"
        gap={3}
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
      <PostModal open={open} handleClose={handleClose} cookie={cookie} />
    </>
  );
}
