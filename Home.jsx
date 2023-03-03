import React from 'react'
import Layout from './layout';
import Login from './Login';
import Sign from './Sign';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
const Home = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/" element={<Layout/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default Home