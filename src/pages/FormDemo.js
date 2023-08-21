import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Box, Divider, FormControl, FormHelperText, Input, InputLabel, Stack, TextField, Typography } from '@mui/material';

export default function FormDemo() {

    return (
        <>
        
            <form>
                <FormControl required sx={{m:3}}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input  aria-describedby="my-helper-text" />
                    <FormHelperText >We'll never share your email.</FormHelperText>
                </FormControl>

                {/* // valinna bootstrap input field style */}
                <Stack  direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Typography>Name</Typography>
                    <TextField variant="outlined" />
                </Stack>


            </form>
        </>
    )
}