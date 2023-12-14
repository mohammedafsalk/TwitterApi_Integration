const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.route");
const tweetRoute = require("./routes/tweet.route");

dotenv.config();
const port = 3000;
const app = express();

app.use(express.json());

app.use(
  cors({
    // origin: "https://tweetappinteg.netlify.app",
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/tweet", tweetRoute);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
