import React from "react";

export const NavBar = (props) => {
  return (
    <div className="navbar">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="modalBtn" onClick={() => props.openfn}>
        Login
      </a>
    </div>
  );
};
