import React from "react";

import product01 from "../../assets/products/product01.png";
import product01Video from "../../assets/products/product01Video.png";
import play_circle from "../../assets/products/play_circle.png";
import arrow from "../../assets/arrow.png";

import "./styles.css";

export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <div className="navigation-gallery">
          <div className="video">
            <h1>Vídeo</h1>
            <img
              src={product01Video}
              alt=""
              style={{ width: 82, height: 45 }}
            />
            <a className="play-button" href="www">
              <img src={play_circle} alt="" />
            </a>
          </div>
          <div className="photos">
            <a href="www" style={{ marginTop: 10, marginBottom: 10 }}>
              <img src={arrow} alt="" />
            </a>
            <a href="www">
              <img src={product01} alt="" style={{ width: 82, height: 94.3 }} />
            </a>
            <a href="www">
              <img
                src={product01}
                alt=""
                style={{ width: 82, height: 94.3, opacity: 0.4, marginTop: 10 }}
              />
            </a>
            <a href="www">
              <img
                src={product01}
                alt=""
                style={{ width: 82, height: 94.3, opacity: 0.4, marginTop: 10 }}
              />
            </a>
            <a href="www">
              <img
                src={product01}
                alt=""
                style={{ width: 82, height: 94.3, opacity: 0.4, marginTop: 10 }}
              />
            </a>
            <a href="www" style={{ marginTop: 10, marginBottom: 10 }}>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
        <img src={product01} alt="" style={{ width: 430, height: 556 }} />
      </div>
    </>
  );
}
