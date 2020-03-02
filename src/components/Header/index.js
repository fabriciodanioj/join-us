import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

import cart from "../../assets/cart.svg";

import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a href="www">Entrar</a>
        <a href="www">Cadastre-se</a>
      </div>
      <div className="header-middle">
        <a href="www">SAPATOS</a>
        <a href="www">BOLSAS</a>
        <a href="www">ACESSÓRIOS</a>
        <a href="www">OFF</a>
      </div>
      <div className="header-right">
        <div className="search-box">
          <SearchIcon style={{ color: "#686868" }} />
          <input type="text" placeholder="Busca" />
        </div>
        <IconButton color="inherit">
          <img
            src={cart}
            alt="cart"
            style={{ padding: 0, margin: 0, width: 24, height: 24 }}
          />
          <Badge
            badgeContent={0}
            showZero={true}
            style={{ color: "#686868", marginLeft: 5 }}
          />
        </IconButton>
      </div>
    </div>
  );
}
