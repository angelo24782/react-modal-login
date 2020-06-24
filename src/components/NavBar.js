import React from "react";

export const NavBar = ({ openfn }) => {
  return (
    <div className="navbar">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="modalBtn" onClick={openfn}>
        Login
      </a>
    </div>
  );
};
