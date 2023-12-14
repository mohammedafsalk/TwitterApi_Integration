const querystring = require("querystring");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
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
    const { name, profile_image_url } = result;
    res.cookie("myCookie", accessToken);
    res.redirect(
      `http://localhost:5173/?name=${encodeURIComponent(
        name
      )}&profile_image_url=${encodeURIComponent(profile_image_url)}`
    );
  } catch (error) {
    res.send("Something went wrong");
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
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
}

async function logout(req, res) {
  try {
    const { token } = req.body;
    let { data } = await axios.post(
      "https://api.twitter.com/2/oauth2/revoke",
      `token=${encodeURIComponent(token)}&client_id=${encodeURIComponent(
        clientId
      )}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { redirect, logout };
