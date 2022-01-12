import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: "#14235C", color: "white" }}
    >
      <div className="container">
        <Link className="navbar-brand mx-auto" to="/">
          <img src={logo} alt="logomarca" width="100px" />
        </Link>
      </div>
    </nav>
  );
}
