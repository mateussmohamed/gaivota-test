import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { authenticate } from "../../auth";
import { PropTypes } from "prop-types";

const Login = props => {
  const { history } = props;
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  /**
   * Handle the input change and changes the form state
   * @function handleChange
   * @param {String} key - Form field key
   * @returns {Function} On change event handler
   */
  const handleChange = key => ({ target }) => {
    setLoginForm({ ...loginForm, [key]: target.value });
  };

  /**
   * Submit the login form and handles the response
   * @function handleSubmit
   * @param {Event} e - Submit event
   */
  const handleSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    const { email, password } = loginForm;
    try {
      // Here you can store the userData in any way
      const userData = await authenticate(email, password);
      console.log(userData);
      history.push("/app/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="input"
        onChange={handleChange("email")}
        value={loginForm.email}
        placeholder="admin@gaivota.ai"
      />
      <input
        name="password"
        type="password"
        onChange={handleChange("password")}
        value={loginForm.password}
        autoComplete="off"
      />
      <button type="submit">Login</button>
    </form>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default withRouter(Login);
