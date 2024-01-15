import { Link } from "react-router-dom";
import "./components.css";

function Card(props) {
  const cardDetail = (event) => {
    event.preventDefault();
    localStorage.setItem("key", cardkey);
    localStorage.setItem("category", category);
    window.location.href = "/detail";
  };
  const { src, title, price, cardkey, category } = props;
  return (

    <Link
      className="col-md-3 mb-5 card-container text-decoration-none"
      to={"/detail"}
      onClick={cardDetail}
    >
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={src} className="card-img-top" alt="...." />
        <div className="card-body" id={cardkey} value={category}>
          <h5 className="card-title">{title}</h5>
          <h2 className="card-text">{price}</h2>
        </div>
        <div className="button-spek" onClick={cardDetail}>
          Selengkapnya ➝
        </div>
      </div>
    </Link>
  );
}

export default Card;
