import './App.css';
import React from 'react'
import{
  BrowserRouter as Router , 
  Routes ,
  Route ,
} from "react-router-dom" ;
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signUp';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
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
