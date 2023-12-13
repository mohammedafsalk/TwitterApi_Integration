const axios = require("axios");

async function createTweet(req, res) {
  const { cookie, tweetData } = req.body;
  console.log(cookie);
  console.log(tweetData);
  try {
    let { data } = await axios.post(
      "https://api.twitter.com/2/tweets",
      { text: tweetData },
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );
    if (data.data) {
      res.json({ success: true, message: "Tweet created successfully" });
    } else {
      res.json({
        success: true,
        message: "Attempt Failed logout and try again",
      });
    }
  } catch (error) {
    res.json({ success: false, message: "Something Went Wrong" });
  }
}

module.exports = { createTweet };
