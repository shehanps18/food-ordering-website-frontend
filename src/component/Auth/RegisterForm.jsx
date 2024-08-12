import React from 'react';
import { Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../status/authentication/Action';
import { useDispatch } from 'react-redux';

const initialValues = {
    fullname: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
};

export default function RegisterForm() {
    const navigate = useNavigate();
    // const dispatch= useDispatch()

    const handleSubmit = () => {
        // console.log("form values", values);
        // dispatch(registerUser({userData:values,navigate}))
    };

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                {({ handleSubmit, setFieldValue, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field
                            as={TextField}
                            name="fullname"
                            label="Full Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="role-simple-select-label">Role</InputLabel>
                            <Field
                                as={Select}
                                name="role"
                                labelId="role-simple-select-label"
                                id="role-simple-select"
                                value={values.role}
                                onChange={(e) => setFieldValue('role', e.target.value)}
                            >
                                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                            </Field>
                        </FormControl>
                        <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Already have an account?
                <Button size='small' onClick={() => navigate("/account/login")}>Login</Button>
            </Typography>
        </div>
    );
}
