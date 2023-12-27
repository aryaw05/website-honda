import data from "../data.json";
function DetailPage() {
  const Data = data;
  const KeyName = localStorage.getItem("key");
  const productCategory = localStorage.getItem("category");
  // const dataFind = Data[productCategory].find((item) => item.id === KeyName);
  // console.log(dataFind);
  // console.log(Data[productCategory][KeyName]);

  const dataBaru = Data[productCategory][KeyName - 1];

  // const productDescription = localStorage.getItem("desc");
  return (
    <div>
      {/* {Data.Matic[2].map((item, index) => (
        <div key={index}>
          <img className="card-img-top" alt="..." />
          <h1>{item.name}</h1>
          <p></p>
        </div>
      ))} */}
      {/* {Data[productCategory].map((item, index) => (
        <div key={index}>
          <p>{item.namaBarang}</p>
          <p>{item.harga}</p>
        </div>
      ))} */}
      {/* <img src={dataBaru["detail header"]} />
      <img src={dataBaru.gambar} />
      <h1>{dataBaru.namaBarang}</h1>
      <h1>{dataBaru.harga}</h1>
      <p>{dataBaru.deskripsi}</p> */}

      <div class="container-fluid mt-5">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src={dataBaru["detail header"]}
                class="d-block w-100"
                alt=""
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={dataBaru["tengah"]} class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img
                src={dataBaru["bawah e tengah"]}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="d-flex my-5 align-items-center container-fluid gap-5">
        <img src={dataBaru.gambar} alt="" style={{ width: "50%" }} />
        <div>
          <h2 class="fw-bold">Spesifikasi Pada Motor {dataBaru.namaBarang}</h2>
          <p>{dataBaru.deskripsi}</p>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
