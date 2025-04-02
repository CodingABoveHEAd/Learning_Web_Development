import React from "react";
import "../styles/global.css";
import styled from "../styles/nav.module.css";

export default function Nav() {
  return (
    <div className={styled.nav}>
      <div className={styled.name}>
        <img
          style={{ height: 90, width: 90 }}
          src="/HTML_Template/images/dsalogo.webp" // Corrected path
          alt="logo"
        />
        <span style={{ fontSize: "25px", marginTop: "30px" }}>
          DSA Quiz Website
        </span>
      </div>
      <div className={styled.login}>
        <a href="/Signup" style={{ marginRight: "10px" }}>
          Signup
        </a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
