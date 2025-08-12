import React from "react";
import logo from "./assets/talrev.png";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* navbar */}
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "var(--talrev-bg-dark)" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#top">
            <img src={logo} alt="Talrev" height="40" className="me-2" />
            <span className="fw-semibold">Talrev</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* hero */}
      <header className="hero">
        <div className="container text-center">
          <img src={logo} alt="Talrev" height="110" className="mb-3" />
          <h1 className="display-5 fw-semibold">
            Edge Computing & Privacy‑First Solutions
          </h1>
          <p className="lead mt-2">
            Secure digital twins and compliance tooling built for modern
            infrastructure.
          </p>
          <a href="#products" className="btn btn-primary btn-lg mt-3">
            Explore Products
          </a>
        </div>
      </header>

      {/* sections */}
      <main>
        <section id="about" className="section">
          <About />
        </section>

        <section id="products" className="section section-alt">
          <div className="container">
            <Products />
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <footer
        className="text-center py-4"
        style={{ backgroundColor: "var(--talrev-bg-dark)" }}
      >
        <small>
          &copy; {new Date().getFullYear()} Talrev. All rights reserved.
        </small>
      </footer>
    </>
  );
}

export default App;
