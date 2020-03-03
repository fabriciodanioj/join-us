import React from "react";

import logo from "../../assets/logo-fotter.png";

import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        molestie massa in nunc condimentum, vel placerat lacus pulvinar.
        Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc semper
        leo nec tellus gravida faucibus
      </p>
      <img src={logo} alt="logo" />
    </div>
  );
}
