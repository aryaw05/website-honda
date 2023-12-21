import { Link } from "react-router-dom";

function Card(props) {
  const cardDetail = (event) => {
    event.preventDefault();
    localStorage.setItem("image", src);
    localStorage.setItem("name", title);
    localStorage.setItem("desc", desc);
    localStorage.setItem("price", price);
    localStorage.setItem("key", cardkey);
    window.location.href = "/detail";
  };
  const { src, desc, title, price, cardkey } = props;
  console.log(cardkey);
  return (
    <div className="col-md-4" id={cardkey}>
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text  ">{price}</p>
          <p className="card-text  ">{desc}</p>

          <Link
            to={"/details"}
            onClick={cardDetail}
            className="btn btn-primary"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
