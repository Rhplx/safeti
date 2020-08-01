import React, { Component } from "react";
import Navigation from "../components/Navigation.jsx";
import "swiper/swiper.scss";

import "../styles/Home.scss";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navigation />
        <section className="pagos">
          <div className="contenedor">
            <div className="formularioPago">
              <form action="">
                <input type="text" placeholder="Empresa" />
                <input type="text" placeholder="RFC" />
                <input type="text" placeholder="Correo" />
                <input type="text" placeholder="Telefono" />
              </form>
              <div className="datosPago">
                <h1>Total de compra</h1>

                <p>Safeti basic</p>
                <ul>
                  <li>Instalación Inicial</li>
                  <li>Fire Wall</li>
                  <li>Antivirus</li>
                  <li>SafeTi App</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <h5>©Safeti 2020 – Aviso de privacidad</h5>
        </footer>
      </>
    );
  }
}
