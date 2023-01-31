import React from "react";
import {Link} from "react-scroll";

const NavbarThree = () => {
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
      <div id="navbar" className="navbar-area navbar-style-3">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/images/filmlogo2.png" alt="logo" style={{"maxWidth":"29%", "borderRadius":"1vh"}} />
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
                  <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Home 
                    </a>
                  </Link>

                  
                </li>

                <li className="nav-item">
                  <Link to="services" smooth={true} spy={true} offset={-100}>
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Services 
                    </a>
                  </Link>

        
                </li>
                

                <li className="nav-item">
                  <Link to="pricing" smooth={true} spy={true} offset={-100}>
                    <a className="nav-link">Pricing</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="process" smooth={true} spy={true} offset={-100}>
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Process 
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="faq" smooth={true} spy={true} offset={-100}>
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      FAQ 
                    </a>
                  </Link>

            
                </li>

                <li className="nav-item">
                  <Link to="blog" smooth={true} spy={true} offset={-200}>
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Blog 
                    </a>
                  </Link>
{/*
                  <ul className="dropdown-menu">
                    
                    <li className="nav-item">
                      <Link href="/blog" activeClassName="active">
                        <a className="nav-link">Blog Grid</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog2" activeClassName="active">
                        <a className="nav-link">Blog Right Sidebar</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog3" activeClassName="active">
                        <a className="nav-link">Blog Left Sidebar</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog-details" activeClassName="active">
                        <a className="nav-link">Blog Details</a>
                      </Link>
                    </li>
                  </ul>
  */}
                </li>

                <li className="nav-item">
                  <Link to="contact" smooth={true} spy={true} offset={50}>
                    <a className="nav-link">Contact Us</a>
                  </Link>
                </li>
              </ul>

              <div className="others-options">
                <Link to="/" smooth={true} spy={true} offset={50}>
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

export default NavbarThree;
