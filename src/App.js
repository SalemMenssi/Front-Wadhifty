import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/User/Index";
import IndexAdmin from "./pages/Admin/Index";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "./Utility/UserAPI";
import "./i18n";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token || typeof token !== "string" || token.trim() === "") {
          setIsAdmin(false);
          return;
        }

        const decodedToken = jwtDecode(token);
        if (!decodedToken?.id) {
          setIsAdmin(false);
          return;
        }

        const user = await getUserById(decodedToken.id);
        setIsAdmin(user?.user?.isAdmin || false);
      } catch (error) {
        console.error("Error in checkAuth:", error);
        setIsAdmin(false);
      }
    };

    checkAuth();

    const intervalId = setInterval(checkAuth, 1000); // 5 minutes

    return () => clearInterval(intervalId);
  }, [isAdmin]);

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={isAdmin ? <IndexAdmin /> : <Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
