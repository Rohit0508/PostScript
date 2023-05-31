import React from "react";
import { IoMdAdd } from "react-icons/io";
import DisplayBlogs from "./Blogs";
import Navbar from './Navbar';

const Home=()=>{
    return(
        <>
        <Navbar />
        <div className="home-container">

        </div>
        <DisplayBlogs/>
        </>
    )
}

 export default Home;