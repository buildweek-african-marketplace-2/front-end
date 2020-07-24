import React, { useState} from 'react';
import * as yup from "yup";
import { axiosWithAuth } from "../axiosWithAuth";
import { Form, Input, PrimaryButton } from './StyledComponents';

export function SignUp(props) {

    const formSchema = yup.object().shape({
        name: yup.string().min( 2, `Must be more than 2 characters`).required("Name is a required field"),
        email: yup.string().email("must be a valid email address").required("must include a valid email"),
        password: yup.string().required('Password is required'),
        // passwordConfirmation: yup.string(),
        // .oneOf([yup.ref('password'), null], 'Passwords must match'),
        location: yup.string().required('Please type a valid city'),
    })

    //set state for form
    const [formState, setFormState] = useState({
        name: '', 
        email: '',
        password: '',
        location: ""
    });
    // set state for errors
    const [errors, setErrors] = useState({
        name: '', 
        email: '',
        password: '',
        location: ""
    });

    const [post, setPost] = useState([]);

    const formSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
          .post("https://sauti-africa.herokuapp.com/api/register", formState)
          .then(res => {
           
            setPost(res.data); // get just the form data from the REST api
            console.log("success", res);
            props.history.push('/')
            
            // reset form if successful
            setFormState({
                name: '', 
                email: '',
                password: '',
                location: ""
            });

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

        const newFormData = {
          ...formState,
          [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
    
        validateChange(e);
        setFormState(newFormData);
      };


    return (
        <Form className="centeredToPageForms" onSubmit={formSubmit}>
            <h1>Sign Up</h1>

                {/* Name */}
                <Input 
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange={inputChange}
                />{errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
                
                {/* Email */}
                <Input 
                    name='email'
                    type='text'
                    placeholder='Email Address'
                    onChange={inputChange}
                />{errors.email.length > 0 ? (<p className='error'>{errors.email}</p>) : null}
                
                {/* Password */}
                <Input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={inputChange}
                />{errors.password.length > 0 ? (<p className='error'>{errors.password}</p>) : null}
                
                {/* Location - city */}
                <Input 
                    name='location'
                    type='text'
                    placeholder='City'
                    onChange={inputChange}
                />{errors.location.length > 0 ? <p className='error'>{errors.location}</p> : null}
              <PrimaryButton >Submit</PrimaryButton>
        </Form>
    )
}