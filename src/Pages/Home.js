import cleanprod from "../assets/images/cleaning-products.jpg"

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
  <Navbar />
  <div className="row d-flex align-items-center pt-5">
    <div className="col-md-4 border-top border-bottom border-2">
<p className="ps-5 pt-5" style={{fontSize: "26px"}}>A <strong>Casa da Faxina</strong> reúne as melhores marcas da limpeza e conservação.</p>
<p className="ps-5" style={{fontSize: "26px"}}>Seja na nossa loja física ou através da nossa entrega rápida, oferecemos um atendimento personalizado para que você encontre o produto mais adequado à sua atividade.</p>
<p className="ps-5 pb-5" style={{fontSize: "26px"}}>Temos também planos especiais para a sua empresa ou condomínio.</p>
    </div>
    <div className="col-md-8">
  <img src={cleanprod} alt="produtos de limpeza" className="img-fluid"/>
  </div>
  </div>
  </div>
  )
}
