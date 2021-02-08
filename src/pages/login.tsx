import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User, UserLoginInputs } from "../models/User";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../components/form/FormInput";
import Auth from "../services/auth";
import useDb from "../hooks/useDb";
const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please type a valid email")
    .required("please fill in the email"),
  password: yup.string().required(),
});

function LoginPage() {
  const { register, handleSubmit, errors, setError } = useForm<UserLoginInputs>(
    {
      resolver: yupResolver(loginFormSchema),
    }
  );

  const db = useDb();

  const onSubmit: SubmitHandler<UserLoginInputs> = async (data) => {
    console.log(data);
    const loggedUser = await Auth.login(
      data.email + "@ovoplusbo.com",
      data.password
    );
    if (!loggedUser) {
      setError("email", {
        type: "validation",
        message: "No existe un usuario con este correo electronico",
      });
      return;
    }
    const dbUser = await db.get<User>("users", loggedUser.uid);
    console.log(dbUser);
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Correo electronico" name="email" ref={register} />
        <FormInput label="Contraseña" name="password" ref={register} />
        <button type="submit">Login</button>
        {errors.email?.message}
      </form>
    </div>
  );
}

export default LoginPage;
