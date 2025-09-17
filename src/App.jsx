import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import CreatePost from './Pages/CreatePost'
import Navbar from './components/Navbar'
import RegisterPage from './Pages/RegisterPage'
import Footer from './components/Footer'
import Blog from './Pages/Blog'
const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<RegisterPage/>} />
        <Route path='/new' element={<CreatePost/>} />
        <Route path='/blog' element={<Blog/>} />
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App