import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "../modules/app";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Routes;
