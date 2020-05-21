import React from "react";

import Layout from "../../components/layout";
import LoginButton from "./components/login-button";

const Home = () => {
  return (
    <Layout headerActions={<LoginButton />}>
      <div className="flex mb-4">
        <div className="w-3/4 h-64 bg-gray-400">
          <h1>MAP</h1>
        </div>
        <div className="w-1/2 h-64 bg-gray-500">
          <h1>FORM</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
