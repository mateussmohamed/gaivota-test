import React from "react";
import Proptypes from "prop-types";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import { logout, getUserData } from "../../services/auth";

const Header = ({ children }) => {
  const history = useHistory();
  const user = getUserData();

  const handleToHome = () => {
    history.push("/");
  };

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <main className="bg-gray-100">
      <header className="flex flex-1 flex-row items-center justify-between content-start py-6 px-16 bg-teal-600 absolute w-full">
        <img
          src={Logo}
          className="w-20 cursor-pointer"
          onClick={handleToHome}
        />

        {user && (
          <div className="flex flex-row items-center">
            <p className="text-xl text-gray-200 mr-4">
              Hello, <strong>{user.name}</strong>
            </p>

            <button
              onClick={handleLogout}
              className="bg-red-400 hover:bg-red-700 text-white py-4 px-10 rounded transition-colors duration-500"
            >
              Logout
            </button>
          </div>
        )}
      </header>

      <section className="container h-screen mx-auto pt-32">{children}</section>
    </main>
  );
};

Header.propTypes = {
  children: Proptypes.node,
  headerActions: Proptypes.node,
};

export default Header;
