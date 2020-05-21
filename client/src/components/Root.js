import "react-hot-loader/patch";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";

const Root = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  );
};

export default Root;
