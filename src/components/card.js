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
    // <div className="col-md-4" id={cardkey}>
    //   <div className="card mx-auto" style={{ width: "18rem" }}>
    //     <img src={src} className="card-img-top" alt="..." />
    //     <div className="card-body ">
    //       <h5 className="card-title">{title}</h5>
    //       <p className="card-text  ">{price}</p>
    //       <p className="card-text  ">{desc}</p>

    //       <Link
    //         to={"/details"}
    //         onClick={cardDetail}
    //         className="btn btn-primary"
    //       >
    //         Lihat Selengkapnya
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <Link
      class="col-md-3 mb-5 card-container text-decoration-none  "
      to={"/detail"}
      onClick={cardDetail}
    >
      <div class="card" style={{ width: "18rem" }}>
        <img src={src} class="card-img-top" alt="...." />
        <div class="card-body" id={cardkey} value={category}>
          <h5 class="card-title">{title}</h5>
          <h2 class="card-text">{price}</h2>
        </div>
        <Link to={"/detail"} class="button-spek" onClick={cardDetail}>
          Selengkapnya ➝
        </Link>
      </div>
    </Link>
  );
}

export default Card;
