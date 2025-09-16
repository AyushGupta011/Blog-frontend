import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="w-full h-70 px-6 flex justify-evenly gap-10">
        {/* Logo / About */}
        <div className="flex flex-col gap-10 w-50 text-center px-20">
          <h2 className="text-xl font-bold text-white">MyBlog</h2>
          <p className="mt-3 text-sm text-gray-400">
            Sharing tutorials, guides, and insights on web development and
            programming.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/createblog" className="hover:text-white transition">
                New Blog
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
             
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex flex-col space-x-4">
            <Link to="/" className="hover:text-white transition">
              🌐
            </Link>
            <Link href="#" className="hover:text-white transition">
              🐦
            </Link>
            <Link href="#" className="hover:text-white transition">
              📸
            </Link>
            <Link href="#" className="hover:text-white transition">
              💼
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
