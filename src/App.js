import { Button } from "@mui/material";
import React, { useState } from "react";
import Nav from "./components/Nav.js";
import SelectElement from "./components/SelectElement.js";
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";

export default function App(){

    return <>
         <ResponsiveAppBar/>     
         <SelectElement />
        <div>Hello world</div>
        <Button variant="contained">Hello world</Button>
    </>
}