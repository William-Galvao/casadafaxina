import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export default function NewNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#14235C", color: "white" }}
    >
      <div className="container-fluid ms-3">
        <Link to="/">
          <img src={logo} alt="Casa da Faxina Logo" width="80px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-around">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planos">
                Planos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">
                Galeria
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
