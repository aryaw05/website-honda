import { Link } from "react-router-dom";

function CorporateHome() {
  return (
    <div class="container-fluid  p-4 mt-5 mx-auto">
      <div>
        <h1 class="text-center" style={{ color: "#e61b33", fontWeight: "700" }}>
          Corporate
        </h1>
      </div>
      <div className="row">
        <div class="corporate text-center  col-md-6">
          <img
          class = "img-fluid"
            src="https://cdn0-production-images-kly.akamaized.net/NVx8mZYPUGS9JeKLp-ZpEzDbYxQ=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1267131/original/011067400_1466153211-1066368.jpg"
            style={{ margin: "auto", maxWidth: "500px" }}
            align="center"
          />
        </div>
        <div className="p-4 col-md-6 " style={{ textAlign: "justify" }}>
          <h2> PT. Honda Astra</h2>
          <p>
            Honda Corporation memiliki pabrik-pabrik di berbagai negara di
            seluruh dunia. Pabrik-pabrik ini dirancang untuk memproduksi
            berbagai jenis kendaraan, mesin, dan komponen lainnya. Pabrik Honda
            biasanya dilengkapi dengan teknologi terkini untuk memastikan
            efisiensi produksi dan kualitas produk. Proses produksi di pabrik
            Honda mencakup tahap-tahap seperti perakitan kendaraan, produksi
            mesin, dan pembuatan suku cadang.{" "}
            <a href="/corporate">Baca Selengkapnya</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CorporateHome;
