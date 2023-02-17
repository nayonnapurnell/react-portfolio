import React from "react";

function Navigation(props) {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#Home">
          Nayonna Purnell
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Home">Home</a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#AboutMe" onClick={() => props.handlePageChange('About Me')}>About Me<span className="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#Projects" onClick={() => props.handlePageChange('Projects')}>Projects<span className="sr-only"></span></a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}

export default Navigation;
