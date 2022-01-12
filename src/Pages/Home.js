import cleanprod from "../assets/images/cleaning-products.jpg";
import whats from "../assets/images/whatsapp.png";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <a rel="noreferrer" target="_blank" href="https://wa.me/+5521979677478">
        <img src={whats} alt="Whatsapp" className="whats-icon" />
      </a>
      <div className="row d-flex align-items-center pt-5">
        <div className="col-md-4">
          <hr />
          <p className="ps-5 pt-5 pe-3 p-font">
            A <strong>Casa da Faxina</strong> reúne as melhores marcas da
            limpeza e conservação.
          </p>
          <p className="ps-5 pe-3 p-font">
            Seja na nossa loja física ou através da nossa entrega rápida,
            oferecemos um atendimento personalizado para que você encontre o
            produto mais adequado à sua atividade.
          </p>
          <p className="ps-5 pe-3 pb-5 p-font">
            Temos também planos especiais para a sua empresa ou condomínio.
          </p>
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
    </div>
  );
}
