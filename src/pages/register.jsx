import React from "react";

const Register = () => {
  return (
    <div className="registerPages">
      <div className="registerContainer">
        <div className="titleLogin">Login Notes</div>
        <div className="inputBox">
          <div className="registerItem">Username</div>
          <input type="text" placeholder="Masukkan Username anda" />
        </div>
        <div className="inputBox">
          <div className="registerItem">Email</div>
          <input type="email" placeholder="Masukkan email anda" />
        </div>
        <div className="inputBox">
          <div className="registerItem">Password</div>
          <input type="password" placeholder="Masukkan Password anda" />
        </div>
        <div className="inputBox">
          <button className="loginBtn">Daftar</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
