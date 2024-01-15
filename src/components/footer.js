import "./components.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-md-6 footer-contact my-auto">
              <img
                className="img-fluid w-50 mb-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/747px-Honda_Logo.svg.png"
              />
              <p>
                PT. Astra Honda Motor Jl. Laksda Yos Sudarso - Sunter 1 Jakarta
                14350, Indonesia Tel. 0811-9-500-989
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links  my-auto">
              <div>
                <img
                  src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/assets/images/logo/blue-skies.svg"
                  className="img-fluid"
                  style={{ width: "200px" }}
                />
                <img
                  src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/assets/images/logo/soichiro-honda.svg"
                  className="img-fluid"
                  style={{ width: "200px" }}
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links  my-auto">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  {/* <Link to={"/dealer"}>Dealer</Link> */}
                  <h4>Product</h4>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  {/* <Link to={"/afterSales"}>After Salse</Link> */}
                  <h4>Services</h4>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  {/* <Link to={"/corporate"}>Corporate</Link>
                   */}
                  <h4>Parts</h4>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter  my-auto">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ textAlign: "center", background: "#727272", padding: "10px" }}
      >
        © Copyright 2020, PT. Astra Honda Motor. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
