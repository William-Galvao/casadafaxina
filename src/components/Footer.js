import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";

export default function Footer() {
  return (
    <footer className="footer-style pt-4">
      <div className="d-flex justify-content-center">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/junior.c.dafaxina"
        >
          <img src={facebook} alt="facebook" width="40px" className="mx-3" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/casadafaxina"
        >
          <img src={instagram} alt="instagram" width="40px" className="mx-3" />
        </a>
      </div>
      <div className="p-3">
        <p style={{ textAlign: "center" }}>
          Casa da Faxina | Produtos de limpeza, higiene, perfumaria e
          descartáveis
        </p>
        <p className="p-font-footer" style={{ marginTop: "-20px" }}>
          Rua Padre Roberto Sabóia de Medeiros, 30 - Paissandu / Nova Friburgo
        </p>
        <p className="p-font-footer" style={{ marginTop: "-20px" }}>
          (21) 99931-3595 / (21) 99620-3830 / (22) 2521-1640
        </p>
      </div>
    </footer>
  );
}
