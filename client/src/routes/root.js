import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "../modules/app";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  );
};

export default Routes;
