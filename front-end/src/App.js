import './App.css';
import React from 'react'
import{
  BrowserRouter as Router , 
  Routes ,
  Route ,
} from "react-router-dom" ;

import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/login';
import Signup from './components/signUp';
import Home from './components/Home';
import DisplayBlogs from './components/Blogs';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
      <Route path='/blog' element={<DisplayBlogs/>}></Route>
        <Route path='/' element={<Home />}></Route>
      <Route path='/Login' element={<Login />}/>
      <Route path='/SignUp' element={<Signup/>}/>
      </Routes>

    </div>
    <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
