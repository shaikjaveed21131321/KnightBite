import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "../Home/Home";
import "../Home/Home.css"
import About from "../About/About";
import "../About/About.css"
import Menu from "../Menu/Menu";
import Franchies from "../Franchies/Franchies"
const Routing = () =>{
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about/" element={<About/>} />
        <Route path="/menu/" element={<Menu/>} />
        <Route path="/Franchies/" element={<Franchies/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}
export default Routing;