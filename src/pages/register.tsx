import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLoginInputs } from "../models/User";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth from "../services/auth";
import FormInput from "../components/form/FormInput";
const registerFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please type a valid email")
    .required("please fill in the email"),
  password: yup.string().required(),
});

function RegisterPage() {
  const { register, handleSubmit, watch, errors } = useForm<UserLoginInputs>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<UserLoginInputs> = (data) => {
    Auth.register(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Correo Electronico" name="email" ref={register} />
        <FormInput name="password" ref={register} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
