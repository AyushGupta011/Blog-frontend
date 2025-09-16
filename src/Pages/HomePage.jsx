import React from 'react'
import {motion} from 'framer-motion'

const HomePage = () => {
  const featuredPost = [
   { title: "How to Build a Responsive Blog with React and Tailwind",
    excerpt:
      "A practical guide to building a responsive blog homepage using React components and Tailwind CSS utilities.",
    cover:
"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60",
category: "Web Dev",
logo:"https://images.unsplash.com/photo-1607400345788-7a25853e059c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5pZGFuJTIwZ2lybCUyMHBob3RvfGVufDB8fDB8fHww",
author: "Priya Sharma",
date: "Sep 10, 2025",
readTime: "6 min",},
{
  title: "Mastering State Management in React",
  excerpt:
    "Learn how to manage complex state in React using Context API, Redux Toolkit, and best practices for scalable apps.",
cover:
  "https://images.unsplash.com/photo-1581091012184-5c64a1d3d7c5?ixlib=rb-4.0.3&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=crop&q=80",

    category: "React",
  logo:
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  author: "Aarav Mehta",
  date: "Sep 12, 2025",
  readTime: "8 min",
}
,
  {
    title: "Getting Started with Tailwind CSS Animations",
    excerpt:
      "Enhance your web apps with Tailwind CSS animations and transitions for a smooth, modern user experience.",
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60",
    category: "UI/UX",
    logo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    author: "Simran Kaur",
    date: "Sep 14, 2025",
    readTime: "5 min",
  },
  
    {
    title: "JavaScript ES2025: New Features You Should Know",
    excerpt:
      "Explore the latest features in modern JavaScript including pattern matching, decorators, and pipeline operators.",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60",
    category: "JavaScript",
    logo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    author: "Rohan Gupta",
    date: "Sep 16, 2025",
    readTime: "7 min",
  },
  ]; // Just take the first post for this example


return (
<section className="homepage w-full h-full sm:px-5 lg:px-8 py-12 px-10">
  <h1 className='text-4xl text-center '>Sample Blogs</h1>
<div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-1 px-100 gap-8">
  {featuredPost.map((post, index) => (
    <motion.div
    initial={{opacity:0}}
    whileInView={{ opacity: 1,y:0}}
    viewport={{ once: true, amount: 0.5 }} 
   transition={{ duration: 0.5, ease: "easeOut" }}

     key={index} className="md:px-20  rounded-2xl p-20 gap-20 overflow-hidden hover:shadow-xl transition  shadow-lg bg-white relative mb-10">
<div initial={{x:30,opacity:0}}

    //  animate={{ opacity: 1,y:0}}
            
            transition={{ duration: 0.4 , type: "spring" }} className="md:flex  ">


<div className="relative w-full md:w-1/2 h-100">
<img
src={post.cover}
alt={post.title}
className="w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
<div className="absolute bottom-3 left-3 text-white text-xs">
Featured Post
</div>
</div>
<div className="text-container p-6 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs px-2 py-1 border rounded text-indigo-600 bg-white/90">
{post.category}
</span>
<span className="text-xs text-gray-500">
{post.date} • {post.readTime}
</span>
</div>
<h2 className="text-2xl font-semibold mb-2">
{post.title}
</h2>
<p className="text-gray-600 mb-4">{post.excerpt}</p>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-gray-200 rounded-full" >
  <img src={post.logo} className='object-cover w-10 h-10 rounded-full' alt="" />
  </div>

<div>
<div className="text-sm font-medium">{post.author}</div>
<div className="text-xs text-gray-500">Author</div>
</div>
</div>
<button className="self-start p-20 py-2 border-1 text-black rounded-xl text-m font-medium hover:bg-gray-500 hover:text-white transition">
Read More →
</button>
</div>
</div>
</motion.div>
  ))}
</div>
</section>
  )
}

export default HomePage