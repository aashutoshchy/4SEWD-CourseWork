import React from "react";

function Login() {
  return (
    <div className="form-container">
      <form className="login-form" action="">
        <p className="heading">Login</p>
        <div className="login-input">
          <i class="fa-solid fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="login-input">
          <i class="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
