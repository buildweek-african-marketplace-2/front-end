import React, { useState} from 'react';
import * as yup from "yup";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

import axios from 'axios';

function SignUp(props) {

    const formSchema = yup.object().shape({
        username: yup.string().min( 2, 'Must be more than 2 character').required("Username is a required field"),
        password: yup.string().required('Password is required'),
        // passwordConfirmation: yup.string(),
        // .oneOf([yup.ref('password'), null], 'Passwords must match'),
    })

    //set state for form
    const [formState, setFormState] = useState({ 
        username: '',
        password: '',
    });
    // set state for errors
    const [errors, setErrors] = useState({ 
        username: '',
        password: '',
    });

    const [post, setPost] = useState([]);

    const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://afrikan-market.herokuapp.com/api/auth/register", formState)
          .then(res => {
           
            // setPost(res.data); // get just the form data from the REST api
            console.log("success", res.data);
          }).then(res =>{
            // reset form if successful
            setFormState({
                username: '',
                password: '',
            });
            props.history.push('/')
          })
          .catch(err => console.log(err.response));
      };
    
      const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };
    
      const inputChange = e => {
        e.persist();
        console.log(formState)

        const newFormData = {
          ...formState,
          [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
    
        validateChange(e);
        setFormState(newFormData);
      };


    return (
        <form className="centeredToPageForms" onSubmit={formSubmit}>
            <h1>Sign Up</h1>
                <input 
                    name='username'
                    type='text'
                    placeholder='Username'
                    onChange={inputChange}
                />{errors.username.length > 0 ? <p className='error'>{errors.username}</p> : null}
                
                {/* Password */}
                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={inputChange}
                />{errors.password.length > 0 ? (<p className='error'>{errors.password}</p>) : null}
              <button>Submit</button>
        </form>
    )
}

export default SignUp;