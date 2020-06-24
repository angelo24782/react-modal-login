import React from "react";

export const Modal = () => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h2>Login modal</h2>
        <span className="closeBtn">&times;</span>
      </div>
      <div className="modal-body">
        <form>
          <div className="container">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter username" />

            <label htmlFor="psw">Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="clearfix">
            <button type="submit" className="loginBtn">
              Login
            </button>
            <button type="submit" className="cancelBtn">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <h4>Modal footer</h4>
      </div>
    </div>
  );
};
