import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            StartBootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link text-light" href="#">
                About
              </a>
              <a className="nav-link text-light" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
