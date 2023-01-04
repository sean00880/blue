import React from "react";
import Link from "../../utils/ActiveLink";

const NavbarTwo = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/">
            <a className="navbar-brand2">
                <h1>Articulate Insurance</h1>
              </a>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">


<li className="nav-item">
    <Link href="/" activeClassName="active">
      <a className="nav-link">Home</a>
    </Link>
  </li>




  <li className="nav-item">
    <Link href="#">
      <a className="nav-link" onClick={(e) => e.preventDefault()}>
        About <i className="fa-solid fa-angle-down"></i>
      </a>
    </Link>

    <ul className="dropdown-menu">
      <li className="nav-item">
        <Link href="/about" activeClassName="active">
          <a className="nav-link">About Us</a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/team" activeClassName="active">
          <a className="nav-link">Team</a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/pricing" activeClassName="active">
          <a className="nav-link">Pricing</a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/faq" activeClassName="active">
          <a className="nav-link">FAQ</a>
        </Link>
      </li>


      <li className="nav-item">
        <Link href="/coming-soon" activeClassName="active">
          <a className="nav-link">Coming Soon</a>
        </Link>
      </li>
    </ul>
  </li>

  <li className="nav-item">
    <Link href="/services" activeClassName="active">
      <a className="nav-link">Services</a>
    </Link>
  </li>

  <li className="nav-item">
    <Link href="/blog" activeClassName="active">
      <a className="nav-link">Blog</a>
    </Link>
  </li>

  <li className="nav-item">
    <Link href="/contact" activeClassName="active">
      <a className="nav-link">Contact Us</a>
    </Link>
  </li>
</ul>

              <div className="others-options">
                <Link href="/contact">
                  <a className="btn btn-primary">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;
