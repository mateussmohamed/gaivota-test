import React, { useState, useEffect } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

import { isAuthenticated } from "../../services/auth";
import Home from "../home";
import Login from "../login";

const checkRoutes = ["", "/", "/app", "/app/"];

const App = (props) => {
  const { location, match } = props;
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * Authenticates user and set state variables
   * @function authUser
   */
  const authUser = async () => {
    try {
      await isAuthenticated();
      setLogged(true);
      setLoading(false);
    } catch (err) {
      setLogged(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    authUser();
  }, []);

  if (loading) return null;

  const isRoot = checkRoutes.includes(location.pathname);

  if (!logged && location.pathname.includes("login")) {
    return <Redirect to="/login" />;
  }

  if (isRoot) {
    return <Redirect to="/app/home" />;
  }

  return (
    <>
      <Route path={`${match.url}app/home`} component={Home} />
      <Route path={`${match.url}login`} component={Login} />
    </>
  );
};

App.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
};

export default withRouter(App);
