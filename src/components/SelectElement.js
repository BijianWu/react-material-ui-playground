import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export default function SelectElement(){
    const [age, setAge] = useState(10);

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return <>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
    </>
}