import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../../services/auth";

import Login from "../auth/pages/login";
import Farms from "../farms/pages/farms";
import FarmDetail from "../farms/pages/farm-detail";
import Offer from "../offer/pages/offer";
import Payment from "../offer/pages/payment";

const checkRoutes = ["", "/", "/app", "/app/"];

const App = ({ location, match }) => {
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

  const isRoot = checkRoutes.includes(location.pathname);

  const redirectToLogin = !logged && location.pathname.includes("login");

  return (
    <>
      <Route exact path={`${match.url}app/farms`} component={Farms} />
      <Route
        exact
        path={`${match.url}app/farm/:farm_id`}
        component={FarmDetail}
      />
      <Route exact path={`${match.url}app/offer`} component={Offer} />
      <Route exact path={`${match.url}app/payment`} component={Payment} />
      <Route exact path={`${match.url}login`} component={Login} />

      {isRoot && logged && <Redirect to="/app/farms" />}
      {redirectToLogin && <Redirect to="/login" />}
    </>
  );
};

App.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
};

export default App;
