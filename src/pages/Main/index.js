import React from "react";

import Header from "../../components/Header";
import Gallery from "../../components/Gallery";

import "./styles.css";

import logo from "../../assets/logo.png";

export default function Main() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="Logo Original.io" />
      </div>
      <Header />
      <div className="container">
        <h1 className="route-path">
          Home / <strong>Sapatos</strong>
        </h1>
        <div className="content">
          <Gallery />
        </div>
      </div>
    </>
  );
}
