import { Button, Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from "yup";


export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log("onSumbit", values);
        },
        validate: (values) => {
            console.log("validate", values);
            const errors = {};
            if(!values.email){
                errors.email = "Email is required";
            }

            if(!values.password){
                errors.password = "Password is required";
            }


            return errors;
        }
    });

    const customHandleSubmit = (e) => {
        formik.handleSubmit(e);

        if(formik.submitCount ==0 || Object.keys(formik.errors).length > 0){
            console.log("form error, please check ")
        }
    }
    return (
        <Paper sx={{mt: "30px"}}>
        <form onSubmit={customHandleSubmit}>
            <TextField id="outlined-basic" label="Email" name="email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email && <p style={{color: "red"}}>{formik.errors.email}</p>}
            <TextField id="outlined-basic" label="Password" name="password" variant="outlined" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.password && formik.touched.password && <p style={{color: "red"}}>{formik.errors.password}</p>}
            <Button variant="contained" type='sumbit'>Login</Button>
        </form>
        </Paper>
    )
}