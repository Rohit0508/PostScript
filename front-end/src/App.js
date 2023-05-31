import './App.css';
import React from 'react'
import{
  Routes ,
  Route ,
} from "react-router-dom" ;

import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/login';
import Signup from './components/signUp';
import Home from './components/Home';
import Mainpage from './components/Main';
import Privatecomp from './components/PrivateComp';
import Profile from './components/Profile';
function App() {

  return (
    <>
    <BrowserRouter>
  
    <div className="App">
      <Routes>
      <Route element={<Privatecomp />}>
      <Route path='/blog' element={<Mainpage/>}></Route>
      <Route path='/profile/:id' element={<Profile />}/>
      </Route>
      
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
