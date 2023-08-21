import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Divider, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@mui/material';

export default function FormDemo() {

    return (
        <>
        
            <form>
                <FormControl sx={{m:3}}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input  aria-describedby="my-helper-text" />
                    <FormHelperText >We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl sx={{m:3}}>
                    <TextField label="Name" variant="outlined" />
                </FormControl>

            </form>
        </>
    )
}