import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { Form, Input, PrimaryButton } from './StyledComponents';


const formSchema = yup.object().shape({
    username: yup.string().required("Please enter a valid username"),
    password: yup.string().required("Please enter a valid password")
})

const Login = () => {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    })

    const [errorState, setErrorState] = useState ({
        username: "",
        password: ""
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        });

    }, [formState]);

    const formSubmit = event => {
        event.preventDefault();
        axios
            .post("https://afrikan-market.herokuapp.com/api/auth/login", formState)
            .then(response => {
                console.log(response.data)
                console.log(response.data.token)
                localStorage.setItem('token', response.data.token)
            })       
            .catch(err => console.log("something went wrong", err))
    }

    const inputChange = event => {
        console.log(formState)
        event.persist()
        validate(event)
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormState({...formState, [event.target.name]: value})
    }

    const validate = event => {
        let value = 
            event.target.type === "checkbox" ? event.target.checked : event.target.value;
            yup
            .reach(formSchema, event.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                        [event.target.name]: err.errors[0]
                })
            })
    }

    return (
        <div className="login-container">
            <div>
                <div>
                    <Form onSubmit={formSubmit}>
                    <h1>Login</h1>
                        <label htmlFor="username">
                            <p>Username</p>
                            <Input type="text" 
                            name="username"  
                            placeholder="Username" 
                            value={formState.username} 
                            onChange={inputChange} />
                        </label>
                        {errorState.username.length > 2 ? (
                        <p className="error">{errorState.username}</p>
                    ) : null}
                        <br/>

                        <label htmlFor="password">
                            <p>Password</p>
                            <Input type="password" 
                            name="password"  
                            placeholder="Password" 
                            value={formState.password} 
                            onChange={inputChange} />
                        </label>
                        {errorState.password.length > 2 ? (
                        <p className="error">{errorState.password}</p>
                    ) : null}
                        <br/>

                        <PrimaryButton type="primary" className="submit" disabled={buttonDisabled}>Login</PrimaryButton>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;