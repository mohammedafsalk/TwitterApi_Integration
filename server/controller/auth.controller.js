const querystring = require("querystring");
const dotenv = require("dotenv");
const axios = require("axios");
const jwt = require("jsonwebtoken");

dotenv.config();

const clientId = "amZwQjVLLVpaUVNmVUNMTUNwZjg6MTpjaQ";
const clientSecret = "jHs7OW6Jxt9a6z4ilPyaYP3SGWntY1oCykkOXEYt_-ax4qKqvx";
const redirectUri = "http://localhost:3000/auth/twitter/callback";
const codeVerifier = "challenge";

async function redirect(req, res) {
  const authCode = req.query.code;

  const requestBody = {
    grant_type: "authorization_code",
    code: authCode,
    client_id: clientId,
    redirect_uri: redirectUri,
  };
  if (codeVerifier) {
    requestBody.code_verifier = codeVerifier;
  }
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${credentials}`,
  };
  try {
    let { data } = await axios.post(
      "https://api.twitter.com/2/oauth2/token",
      querystring.stringify(requestBody),
      { headers }
    );
    const accessToken = data.access_token;
    const result = await getDetails(accessToken);

    res.cookie("myCookie", accessToken);
    res.redirect("http://localhost:5173/");
  } catch (error) {
    console.log(error);
  }

  async function getDetails(token) {
    try {
      let { data } = await axios.get(
        "https://api.twitter.com/2/users/me?user.fields=profile_image_url",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data.data,"data");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { redirect };
