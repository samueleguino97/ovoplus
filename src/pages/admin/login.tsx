import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLoginInputs } from '../../models/User';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Auth from '../../services/auth';

const loginFormSchema = yup.object().shape({
    email: yup.string().email('Please type a valid email').required('please fill in the email'),
    password: yup.string().required()
})

function LoginPage() {
    const { register, handleSubmit, watch, errors } = useForm<UserLoginInputs>({
        resolver: yupResolver(loginFormSchema)
    });
    
    const onSubmit:SubmitHandler<UserLoginInputs>=(data)=>{
        Auth.login(data.email,data.password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} > 
                <input name='email' ref={register}  />
                <input name='password' ref={register}/>
                <button type='submit' >Login</button>
            </form>
        </div>
    )
}

export default LoginPage
