import React from "react";
import { useHistory } from "react-router-dom";

const LoginButton = () => {
  const history = useHistory();

  const handleToLogin = () => {
    history.push("/login");
  };

  return (
    <button
      onClick={handleToLogin}
      className="bg-teal-100 hover:bg-teal-200 text-teal-700 py-4 px-12 rounded"
    >
      Login
    </button>
  );
};

export default LoginButton;
