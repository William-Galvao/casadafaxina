import cleanprod from "../assets/images/cleaning-products.jpg";
import whats from "../assets/images/whatsapp.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Home() {
  return (
    <div>
      <Navbar />
      <a rel="noreferrer" target="_blank" href="https://wa.me/+552199931-3595">
        <img src={whats} alt="Whatsapp" className="whats-icon" />
      </a>
      <div className="row d-flex align-items-center pt-5 pb-5">
        <div className="col-md-4">
          <hr />
          <FadeIn delay="400" transitionDuration="2000">
            <p className="ps-5 pt-5 pe-3 p-font-main">
              A <strong>Casa da Faxina</strong> reúne as melhores marcas da
              limpeza e conservação.
            </p>
            <p className="ps-5 pe-3 p-font-main">
              Seja na nossa loja física ou através da nossa entrega rápida,
              oferecemos um atendimento personalizado para que você encontre o
              produto mais adequado à sua atividade.
            </p>
            <p className="ps-5 pe-3 pb-5 p-font-main">
              Temos também planos especiais para a sua empresa ou condomínio.
            </p>
          </FadeIn>
          <hr />
        </div>
        <div className="col-md-8">
          <img
            src={cleanprod}
            alt="produtos de limpeza"
            className="img-fluid"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
