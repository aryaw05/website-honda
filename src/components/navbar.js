import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top overflow-hidden"
          id="menunav"
        >
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              <img
                decoding="async"
                id="ym-logo"
                loading="lazy"
                src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/assets/images/logo/honda.svg"
                alt="Honda "
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <ul
                  className="navbar-nav menu-ul nav-tabs"
                  style={{ background: "white" }}
                >
                  <li className="nav-item menu-item" id="menu-btn1">
                    <Link className="nav-link menu-link" to={"/"}>
                      <span className="menu-link-txt">Home</span>
                    </Link>
                  </li>
                  <li className="nav-item menu-item" id="menu-btn2">
                    <Link className="nav-link menu-link" to={"/product"}>
                      <span className="menu-link-txt">PRODUCTS</span>
                    </Link>
                  </li>
                  <li className="nav-item menu-item" id="menu-btn6">
                    {/* <Link className="nav-link menu-link" to={"#nav-section"}>
                      <span className="menu-link-txt">DEALERS</span>
                    </Link> */}
                  </li>
                  <li className="nav-item menu-item" id="menu-btn4">
                    <HashLink className="nav-link menu-link" to="/#cardHeader">
                      <span className="menu-link-txt">SERVICES</span>
                    </HashLink>
                  </li>
                  <li className="nav-item menu-item" id="menu-btn5">
                    <Link className="nav-link menu-link" to={"/sparepart"}>
                      <span className="menu-link-txt">PARTS</span>
                    </Link>
                  </li>
                  {/* <li className="nav-item menu-item menu-racing-block">
                    <Link className="nav-link menu-link" to="/racing/">
                      <span className="menu-link-txt">RACING</span>
                    </Link>
                  </li> */}
                  {/* <li
                    className="nav-item menu-item menu-films-block"
                    id="menu-btn3"
                  >
                    <Link className="nav-link menu-link" to="/yamaha-films/">
                      <span className="menu-link-txt">FILMS</span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
