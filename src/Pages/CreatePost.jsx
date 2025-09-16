import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreatePost = () => {
 const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/posts/new`, {
        title,
        content,
      }, { withCredentials: true
        , headers: { "Content-Type": "application/json" }
       }); // in case auth cookies are used

      setMessage("✅ Post created successfully!");
      setTitle("");
      setContent("");
      console.log("Created post:", res.data);
    } catch (error) {
      console.error("Error creating post:", error);
      setMessage("❌ Failed to create post. Try again.");
    }
  };

  return (
    <div className="post-container w-full h-full mt-10 p-6 flex flex-col items-center gap-20 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl  font-medium mb-4 pt-4 text-center">Create New Blog</h2>

      {message && (
        <p className="mb-4 text-center text-sm font-medium text-red-600">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="form space-y-4 w-200 h-120 justify-center flex  flex-col gap-10 items-center  "> 
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <textarea
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg border-1  transition"
        >
          Publish
        </button>
      </form>
    </div>
  )
}

export default CreatePost