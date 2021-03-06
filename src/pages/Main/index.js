import React from "react";

import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import ProductInfo from "../../components/ProductInfo";
import Footer from "../../components/Footer";
import SuggestionCard from "../../components/SuggestionCard";

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
          <ProductInfo />
        </div>
        <div className="suggestions">
          <h1>Quem viu, viu também</h1>
          <div className="cards">
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
