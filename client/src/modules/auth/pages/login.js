import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Layout from "../../../components/layout";
import Input from "../../../components/input";

import { authenticate } from "../../../services/auth";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  /**
   * Submit the login form and handles the response
   * @function onSubmit
   * @param {Event} e - Submit event
   */
  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      // Here you can store the userData in any way
      const userData = await authenticate(email, password);

      if (userData) {
        history.push("/app/farms");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout>
      <div className="h-full flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
        >
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="admin@gaivota.ai"
            register={register}
            errors={errors}
            validate={{ required: "Campo Obrigatório." }}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="******************"
            autoComplete="off"
            register={register}
            errors={errors}
            validate={{ required: "Campo Obrigatório." }}
          />
          <div className="flex items-center justify-between">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
