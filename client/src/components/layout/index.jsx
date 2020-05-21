import React from "react";
import Proptypes from "prop-types";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

const Header = ({ children, headerActions }) => {
  const history = useHistory();

  const handleToHome = () => {
    history.push("/");
  };

  return (
    <main className="bg-gray-100">
      <header className="flex flex-1 flex-row items-center justify-between content-start py-4 px-16 bg-teal-600">
        <img
          src={Logo}
          className="w-20 cursor-pointer"
          onClick={handleToHome}
        />

        <div>{headerActions}</div>
      </header>

      <div className="bg-"></div>
      <section className=" container mx-auto bg-gray-200">{children}</section>
    </main>
  );
};

Header.propTypes = {
  children: Proptypes.node,
  headerActions: Proptypes.node,
};

export default Header;
