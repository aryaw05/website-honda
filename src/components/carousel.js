import "./components.css";
function Corousel() {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        style={{ marginTop: "100px" , }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-1400,pr-true,f-auto/uploads/product-draft/banner/ahm-update-website-headbanner-adv160-1920x800-03112023-080442.jpg"
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-1400,pr-true,f-auto/uploads/product-draft/banner/digital-beat-cover-1920x800px-tr-1-5-01022023-074845-01022023-094456-2-25102023-074812.jpg"
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-1400,pr-true,f-auto/uploads/product-draft/banner/head-banner-pcx160-1920x800-tr-2-21112023-055716.jpg"
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Corousel;
