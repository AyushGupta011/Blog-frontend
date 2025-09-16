// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const LoginPage = () => {
  const { setUser } = useAuth();
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message,setMessage]=useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ important for cookies/session
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful ✅");
        setUser(data.user);
        console.log("User:", data);

        // Save token if backend sends it
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect after login
        navigate("/");
      } else {
        setMessage(data.message || "Login failed ❌");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong, try again later.");
    }
    console.log("Login data:", formData);
  };

  return (
    <div className="post-container w-full h-full mt-10 p-6 flex flex-col items-center gap-20 bg-gray-100 rounded-lg shadow-md">
      {message && (
          <p className="text-center text-sm text-red-500">{message}</p>
        )}


      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-200 h-160 justify-center flex  flex-col gap-10 items-center "
      >
         <h2 className="text-4xl font-light mb-6 text-center">Login</h2>
       
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
          required
        />

        <button
          type="submit"
          className="w-full border-1 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
