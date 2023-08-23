import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { styled } from '@mui/material';


  function CustomHeightTextField() {
    // use the input props to change the height of the input inside the text field
    return (
      <TextField
        inputProps={{
            style: {
                height: "150px",
                width: "250px",
                padding: "100px",
                margin: "10px"
            },
        }}
        id="outlined-basic"
        variant="outlined"
        label="Default"
        defaultValue="Input Text"
      />
    );
  }

  // create a custom styled one
  const StyledTextField = styled(TextField, {
        name: "StyledTextField",
    })({
        width: 300,
        "& .MuiInputBase-root": {
            height: 80
        }
    });

export default function CustomTextField() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    return (
        <>

            <CustomHeightTextField />
            <TextField
                label="Test"
                multiline={true}
                rows={3}
                sx={{my:3}}
                variant="outlined"
            />

            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>

            <TextField
                label="With normal TextField"
                id="standard-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                }}
                variant="standard"
            />

            <TextField
                label="With normal TextField"
                id="standard-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                prop
                type={showPassword ? 'text' : 'password'}
                InputLabelProps={{shrink: true}}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>,
                }}
                variant="standard"
            />

            {/* // set custom width for different breakpoints, and set root height to 80px */}
            <TextField
                sx={{
                    width: { sm: 200, md: 300 },
                    "& .MuiInputBase-root": {
                        height: 80
                    }
                }}
                id="standard-basic"
                label="Filled"
                variant="filled"
                placeholder="SX"
            />

            <StyledTextField variant="outlined" placeholder="Styled API"/>
        </>
    )
}