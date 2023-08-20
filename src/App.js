import { Button } from "@mui/material";
import React, { useState } from "react";
import Nav from "./components/Nav.js";
import SelectElement from "./components/SelectElement.js";
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import ResponsiveDrawer from "./components/ResponsiveDrawer.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

export default function App(){

    return <>
         {/* <Nav/>     */}
         <Routes>
            <Route path="/" element={<Nav/>}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes> 
         {/* <SelectElement />
        <div>Hello world</div>
        <Button variant="contained">Hello world</Button> */}
    </>
}