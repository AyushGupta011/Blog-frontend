import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Blog = () => {
    const {user} =useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 replace with your backend API endpoint
  const APP_BASE_URL=import.meta.env.VITE_API_URL;
  const API_URL = "http://localhost:3000/api/posts/"||`${API_BASE_URL}/api/posts/`;

  useEffect(() => {

     
    if (!user) {
      setBlogs([]); // clear blogs if user logs out
      setLoading(false);
      return;
    }

    const fetchBlogs = async () => {
        setLoading(true);
      try {
        const res = await fetch(API_URL,{ credentials: "include" });
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [user  ]);
 
  return (
    <div className="blog-container w-full mx-auto px-6 py-12">
      <h1 className="text-4xl font-medium mb-4 pt-4 text-center ">Blogs</h1>

      {loading ? (
        <p className="text-center">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={blog.cover||"cover.jpeg"}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 h-60 flex flex-col gap-5 blogs">
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                 <p className="text-gray-600">
                  {blog.content.length > 100
                    ? blog.content.slice(0, 100) + "..."
                    : blog.content}
                </p>
             

                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={blog.logo||"logo.jpeg"}
                    alt={blog.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{blog.user}</p>
                    <p className="text-sm text-gray-500">
                      {blog.date} • {blog.readTime}
                    </p>
                  </div>
                </div>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
