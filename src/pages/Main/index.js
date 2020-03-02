import React from "react";

import Header from "../../components/Header";

import "./styles.css";

import logo from "../../assets/logo.png";

export default function Main() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="Logo Original.io" />
      </div>
      <Header />
    </>
  );
}
