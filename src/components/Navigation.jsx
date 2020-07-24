import React, { Component } from "react";
import Logo from "../assets/images/safetilogo.png";
import "../styles/Navigation.scss";
import Menu from "../assets/images/menu.png";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="contenedor">
          <img src={Logo} alt="" />
          <div className="contenedorEnlaces">
            <ul>
              <li>Servicios</li>
              <li>Como funciona</li>
              <li>Nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className="contenedorMovil">
            <button>
              <img src={Menu} alt="Menu" />
            </button>
          </div>
        </nav>
      </>
    );
  }
}
