import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  const [navToggler, setNavToggler] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 400;
    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.9;

      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <nav
      className="navbar"
      style={!navToggler ?{
        boxShadow: `rgb(32 45 74 / ${boxShadow}) 0px 0px 10px `,
      }:{}}
    >
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler">
            <Link to="/" className="navbar-band" style={{ zIndex: 9 }}>
              ENepal
            </Link>
            <button
              className="navbar-open-btn "
              style={{ zIndex: 9 }}
              onClick={() => setNavToggler(!navToggler)}
            >
              <span className="line" />
              <span
                className="line"
                style={{
                  width: navToggler ? "40%" : "70%",
                }}
              />
              <span className="line" />
            </button>
            <div
              className={
                navToggler
                  ? "navbar-collapse show-navbar-collapse"
                  : "navbar-collapse"
              }
            >
              <ul className="navbar-nav">
                  <Link to="/" className="nav-link">
                <li className="nav-item">
                    Home
                </li>
                  </Link>
                  <Link to="/" className="nav-link">
                <li className="nav-item">
                    Home
                </li>
                  </Link>
                  <Link to="/" className="nav-link">
                <li className="nav-item">
                    Home
                </li>
                  </Link>
                  <Link to="/" className="nav-link">
                <li className="nav-item">
                    Home
                </li>
                  </Link>
              </ul>

              <div className="flex justify-center items-center gap-5">
                <Link to='/login'><Button size="large"  >Log In</Button></Link>
                <Link to='/register'><Button size="large" type="primary" >Sign Up</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
