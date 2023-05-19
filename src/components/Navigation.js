import { Navbar } from "react-bootstrap";
import "../css/style.css";

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <div className="container mt-4">
          <div className="kotak"></div>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-2">
                <a className="nav-link" aria-current="page" href="#service">
                  Our Services
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#why">
                  Why Us
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#testi">
                  Testimonial
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#FAQ">
                  FAQ
                </a>
              </li>
            </ul>

            <div>
              <button className="button-primary fw-bold nav-link rounded-1 ms-4">
                Register
              </button>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
