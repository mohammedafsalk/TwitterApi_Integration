import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function PostModal({ open, handleClose,cookie }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "10px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [tweetData, setTweetData] = useState("");


  async function handleSave() {
    let items = { tweetData, cookie };
    let { data } = await axios.post(
      "http://localhost:3000/tweet/create",
      items
    );
    if (data.success) {
      handleClose();
    }
    alert(data.message);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box textAlign={"center"}>
            <Typography variant="h5" color={"black"} fontWeight={500}>
              Add your tweet text here!
            </Typography>
          </Box>
          <Box py={2} display={"flex"} flexDirection={"column"} gap={3}>
            <TextField
              variant="standard"
              onChange={(e) => setTweetData(e.target.value)}
              label="Tweet text"
              fullWidth
            />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              type="button"
              onClick={handleSave} // disabled={isAnyFieldEmpty}
              variant="contained"
              sx={{ color: "white", bgcolor: "black" }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
