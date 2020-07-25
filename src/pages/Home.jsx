import React, { Component } from "react";
import Navigation from "../components/Navigation.jsx";
import "swiper/swiper.scss";
import Swiper from "react-id-swiper";
import Carrusel1 from "../assets/images/carrusel1.png";
import Carrusel2 from "../assets/images/carrusel2.png";
import Carrusel3 from "../assets/images/carrusel3.png";
import Carrusel4 from "../assets/images/carrusel4.png";
import SwiperCore, { Autoplay } from "swiper";
import Elipse from "../assets/images/Ellipse.png";
import "../styles/Home.scss";

export default class Home extends Component {
  render() {
    SwiperCore.use([Autoplay]);

    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    };
    return (
      <>
        <Navigation />
        <section className="contenedor carrusel">
          <Swiper {...params}>
            <div className="contenedorCarrusel">
              <div className="textoCarrusel">
                <h1> Soporte 24/7 en tu oficina o home office.</h1>
                <button>Conoce nuestros servicios</button>
              </div>
              <div className="imagenCarrusel">
                <img src={Carrusel1} alt="Carrusel1" />
              </div>
            </div>
            <div className="contenedorCarrusel">
              <div className="textoCarrusel">
                <h1> En la nueva normalidad no arriesgues tu seguridad.</h1>
                <button>Conoce nuestros servicios</button>
              </div>
              <div className="imagenCarrusel">
                <img src={Carrusel2} alt="Carrusel1" />
              </div>
            </div>
            <div className="contenedorCarrusel">
              <div className="textoCarrusel">
                <h1> Mantén tu equipo protegido, en todo lugar.</h1>
                <button>Conoce nuestros servicios</button>
              </div>
              <div className="imagenCarrusel">
                <img src={Carrusel3} alt="Carrusel1" />
              </div>
            </div>
            <div className="contenedorCarrusel">
              <div className="textoCarrusel">
                <h1> Asegura que tu información este a salvo.</h1>
                <button>Conoce nuestros servicios</button>
              </div>
              <div className="imagenCarrusel">
                <img src={Carrusel4} alt="Carrusel1" />
              </div>
            </div>
          </Swiper>
        </section>
        <section className="contenedor beneficios">
          <article>
            <img src={Elipse} alt="Elipse" />
            <p>Servicio de respaldo y mantenimiento en todo lugar</p>
          </article>
          <article>
            <img src={Elipse} alt="Elipse" />
            <p>Resolvemos todos tus problemas en una sola plataforma</p>
          </article>
          <article>
            <img src={Elipse} alt="Elipse" />
            <p>Constante inventario de tu equipo de manera remota</p>
          </article>
          <article>
            <img src={Elipse} alt="Elipse" />
            <p>
              Soporte 24/7, obtén ayuda de un especialista no importa la hora
            </p>
          </article>
        </section>
        <section className="servicios">
          <h1>Conoce nuestros servicios.</h1>
          <p>Nuestros servicios empaquetados se adaptan a tus necesidades.</p>
          <div className="contenedor tipos">
            <article className="primerTipo">
              <h3>Safeti basic</h3>
              <p>Instalación Inicial</p>
              <p>Fire Wall</p>
              <p>Antivirus</p>
              <p>SafeTi App</p>
              <h3>$168.37</h3>
              <button>Contactános</button>
            </article>
            <article className="segundoTipo">
              <h3>Safeti business</h3>
              <p>Instalación Inicial</p>
              <p>Fire Wall</p>
              <p>Antivirus</p>
              <p>Respaldo semanal</p>
              <p>SafeTi App</p>
              <h3>$194.88</h3>
              <button>Contactános</button>
            </article>
            <article className="tercerTipo">
              <h3>Safeti Pro</h3>
              <p>Instalación Inicial</p>
              <p>Fire Wall</p>
              <p>Antivirus</p>
              <p>Respaldo semanal</p>
              <p>
                Mantenimiento <br />
                preventivo trimestral
              </p>

              <p>SafeTi App</p>
              <h3>$194.88</h3>
              <button>Contactános</button>
            </article>
          </div>
        </section>
        <section className="contenedor funcionamiento">
          <h1>Cómo funciona</h1>
          <div className="pasos">
            <article>
              <img src={Elipse} alt="Elipse" />

              <h3>Programa una llamada </h3>
              <p>
                Uno de nuestros asesores, solucionará todas tus dudas y te
                ayudará a descubrir qué paquete se ajusta mejor a tus
                necesidades.
              </p>
            </article>
            <article>
              <img src={Elipse} alt="Elipse" />

              <h3>Contrata nuestro servicio</h3>
              <p>
                Mantén tu servicio al día para que las complicaciones se
                mantengan fuera de tu compañía.
              </p>
            </article>
            <article>
              <img src={Elipse} alt="Elipse" />

              <h3>Disfruta de los beneficios</h3>
              <p>
                Al gozar de un equipo completo de TI podrás enfócarte en las
                áreas más importantes de tu empresa.
              </p>
            </article>
          </div>
        </section>
        <section className="contacto">
          <div className="contenedor contactanos">
            <div className="datos">
              <h1>Ponte en contacto con nosotros.</h1>
              <p>T.88 4657 234</p>
              <p>C.be@safeti.com</p>
            </div>
            <div className="formulario">
              <form action="">
                <input type="text" placeholder="Nombre" />
                <input type="tel" placeholder="Teléfono" />
                <input type="email" placeholder="Correo" />
                <textarea placeholder="Escribe tu mensaje aqui"></textarea>
                <div className="botonEnviar">
                  <button type="submit">Contáctanos</button>
                </div>
              </form>
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
