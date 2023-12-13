import React, { useEffect } from "react";
import logo from "../assets/twitter-new-logo-8A0C4E0C58-seeklogo.com.png";
import "../App.css";

export default function Login() {
  const redirect = "http://localhost:3000/auth/twitter/callback";
  const clientId = "amZwQjVLLVpaUVNmVUNMTUNwZjg6MTpjaQ";

  function handleLogin() {
    window.location.href = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect}&scope=tweet.write%20tweet.read%20users.read%20follows.read%20follows.write&state=state&code_challenge=challenge&code_challenge_method=plain`;
  }

  

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}
