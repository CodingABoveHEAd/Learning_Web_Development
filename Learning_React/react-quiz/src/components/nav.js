import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import styled from "../styles/nav.module.css";

export default function Nav() {
  return (
    <div className={styled.nav}>
      <Link to="/">
        <div className={styled.name}>
          <img
            style={{ height: 90, width: 90 }}
            src="/HTML_Template/images/dsalogo.webp"
            alt="logo"
          />
          <span style={{ fontSize: "25px", marginTop: "30px" }}>
            DSA Quiz Website
          </span>
        </div>
      </Link>

      <div className={styled.login}>
        <Link to="/signup" style={{ marginRight: "10px" }}>
          Signup
        </Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
