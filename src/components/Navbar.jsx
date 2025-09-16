import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState ,useEffect} from 'react'
import { useAuth } from '../Context/AuthContext'
import axios from 'axios'
import { AnimatePresence, motion } from "framer-motion";


const Navbar = () => {
  const {user,setUser} =useAuth();
    const [isOpen, setIsOpen] = useState(false);
useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, [setUser]);

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const logout = async () => {
  try {
    await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {},
      { withCredentials: true } // important for sending cookies
    );
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // clear context
    alert("You are logged out ✅");
  } catch (err) {
    console.error("Logout error:", err);
    alert("Logout failed ❌");
  }
};
  return (
    <div className='navbar-container'>
        <div className="navbar">
            <div className="logo"><h1>My Blog</h1></div>
{/* desktop menu */}
            <div className="nav-links hidden md:flex gap-10">
               <Link to="/"><h3>Home</h3></Link>
               <Link to="/blog"><h3>Blog</h3></Link>
               <Link to="/createblog"><h3>Create Blog</h3></Link>
               {user ? (
                   <>
                       <span>👋 Hi, {user.username}</span>
              <button onClick={logout}>Logout</button>
                       
                    
                   </>
               ) : (
                <>
                   <Link to="/signup"><h3>Register/Login</h3></Link>
               
                </>
               )}
            </div>
    

      {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-1 mt-3 h-100 text-center bg-white rounded-lg shadow-lg">
<AnimatePresence>
          <div className="flex flex-col mt-20 gap-10 space-y-3 p-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Home</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Blog</Link>
            <Link to="/createblog" onClick={() => setIsOpen(false)} className="hover:text-gray-400">New Blog</Link>
            {user ? (
              <>
              <span>👋 Hi, {user.username}</span>
                   <button
    onClick={() => { logout(); setIsOpen(false); }}
    className="hover:text-gray-400"
  >
    Logout
  </button>
  </>
            ) : (
                   <Link to="/signup" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Register/Login</Link>
            )}
          </div>
        </AnimatePresence>

        </div>
      )}
        
        </div>
  )
}

export default Navbar