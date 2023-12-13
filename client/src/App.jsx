import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const name = "myCookie" + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    const cookieValue = cookieArray.find((cookie) =>
      cookie.trim().startsWith(name)
    );

    if (cookieValue && cookieValue.trim().substring(name.length) !== "") {
      setLogin(true);
    }
  }, []);

  return (
    <>
      <Routes>
        {login === true && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Navigate to="/" />} />
          </>
        )}
        {login === false && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
