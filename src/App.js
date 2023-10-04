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
import CustomButton from "./pages/CustomButton.js";
import CustomSlider from "./pages/CustomSlider.js";
import CustomTextField from "./pages/CustomTextField.js";
import CustomTable from "./pages/CustomTable.js";
import FoldableNav from "./pages/FoldableNav.js";
import CustomList from "./pages/CustomList.js";
import Login from "./pages/Login.js";

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
                <Route path="custom-button" element={<CustomButton />} />
                <Route path="custom-slider" element={<CustomSlider />} />
                <Route path="custom-text-field" element={<CustomTextField />} />
                <Route path="custom-table" element={<CustomTable />} />
                <Route path="folable-nav" element={<FoldableNav />} />
                <Route path="custom-list" element={<CustomList />} />

                <Route path="login" element={<Login />} />
            </Route>
        </Routes> 
         {/* <SelectElement />
        <div>Hello world</div>
        <Button variant="contained">Hello world</Button> */}
    </>
}