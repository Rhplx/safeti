import React, { Component } from "react";
import Logo from "../assets/images/safetilogo.png";
import "../styles/Navigation.scss";
import Menu from "../assets/images/menu.png";
import { Jump } from "react-jump";

export default class Navigation extends Component {
  showMenu = () => {
    let menu = document.getElementById("menuMovil");
    if (menu.style.display === "" || menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };

  render() {
    return (
      <>
        <nav className="contenedor">
          <img src={Logo} alt="" />
          <div className="contenedorEnlaces">
            <ul>
              <li>
                <Jump target={".servicios"}> Servicios</Jump>
              </li>
              <li>
                <Jump target={".funcionamiento"}>Como funciona</Jump>
              </li>
              <li>Nosotros</li>
              <li>
                <Jump target={".contacto"}>
                  <strong> Contacto</strong>
                </Jump>
              </li>
            </ul>
          </div>
          <div className="contenedorMovil">
            <button onClick={(e) => this.showMenu()}>
              <img src={Menu} alt="Menu" />
            </button>
            <ul id="menuMovil">
              <li>
                <Jump target={".servicios"}> Servicios</Jump>
              </li>
              <li>
                <Jump target={".funcionamiento"}>Como funciona</Jump>
              </li>
              <li>Nosotros</li>
              <li>
                <Jump target={".contacto"}>
                  <strong> Contacto</strong>
                </Jump>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
