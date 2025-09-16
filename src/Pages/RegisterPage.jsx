// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
const RegisterPage = () => {
  const {setUser}= useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message,setMessage]=useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const handleSubmit = async (e) => {
   e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/register`, formData);
      setMessage("✅ " + res.data.message);
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      setFormData({ username: "", email: "", password: "" }); // clear form
    } catch (err) {
      console.error(err);
      setMessage("❌ " + (err.response?.data?.message || "Registration failed"));
    }

  };

  return (
    <div className="post-container w-full h-full mt-10 p-6 flex flex-col items-center gap-20 bg-gray-100 rounded-lg shadow-md">
      <div className="message">
        <p>{message}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" space-y-4 w-200 h-160 justify-center flex  flex-col gap-10 items-center"
      >
        <h2 className="text-4xl font-light mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
          required
        />

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
          className="w-full  text-white py-2 rounded-md border-1 transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
