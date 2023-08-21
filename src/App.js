import { Button } from "@mui/material";
import React, { useState } from "react";
import Nav from "./components/NavBar.js";
import SelectElement from "./components/SelectElement.js";
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import ResponsiveDrawer from "./components/ResponsiveDrawer.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import TimeDemo from "./pages/TimeDemo.js";
import CustomizationDemo from "./pages/CustomizationDemo.js";
import ThemeProviderDemo from "./pages/ThemeProviderDemo.js";
import TransitionsDemo from "./pages/TransitionsDemo.js";
import FormDemo from "./pages/FormDemo.js";
import CustomTabsDemo from "./pages/CustomTabsDemo.js";

export default function App(){

    return <>
         {/* <Nav/>     */}
         <Routes>
            <Route path="/" element={<Nav/>}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="time-demo" element={<TimeDemo />} />
                <Route path="customization-demo" element={<CustomizationDemo />} />
                <Route path="theme-provider-demo" element={<ThemeProviderDemo />} />
                <Route path="transitions-demo" element={<TransitionsDemo />} />
                <Route path="form-demo" element={<FormDemo />} />
                <Route path="custom-tabs-demo" element={<CustomTabsDemo />} />
            </Route>
        </Routes> 
         {/* <SelectElement />
        <div>Hello world</div>
        <Button variant="contained">Hello world</Button> */}
    </>
}