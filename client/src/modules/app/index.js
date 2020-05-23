import React, { useState, useEffect } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";

import { isAuthenticated } from "../../services/auth";

import Login from "../auth/pages/login";
import Farms from "../farms/pages/farms";
import FarmDetail from "../farms/pages/farm-detail";

const App = () => {
  const match = useRouteMatch();
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
      setLogged(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    authUser();
  }, []);

  if (loading) return null;

  return (
    <>
      <Route path={`${match.url}login`} component={Login} />

      <Route path={`${match.url}app/farms`} component={Farms} />
      <Route path={`${match.url}app/farm/:farm_id`} component={FarmDetail} />

      {!logged && <Redirect to="/login" />}
      {logged && <Redirect to="/app/farms" />}
    </>
  );
};

export default App;
