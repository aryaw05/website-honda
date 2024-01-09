import { Link } from "react-router-dom";
import data from "../data.json";
import { useState } from "react";
import Card from "../components/card";
const Navigasi = () => {
  const [category, setCategory] = useState("Matic");
  const handleDetail = (id) => {
    if (id === 1) {
      setCategory("Matic");
    } else if (id === 2) {
      setCategory("Sport");
    } else if (id === 3) {
      setCategory("Bebek");
    }
    console.log("category:", category);
  };
  const dataProduct = data;
  const dataNav = {
    category: [
      {
        id: 1,
        jenis: "Matic",
        cover:
          "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/ahm-chic-2023-variant-web-stylish-green-reverse-2-26102023-030159.png",
      },
      {
        id: 2,
        jenis: "Sport",
        cover:
          "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-50845-24112022-071000.png",
      },
      {
        id: 3,
        jenis: "Bebek",
        cover:
          "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
      },
    ],
  };

  return (
    <div className="nav-section mt-5 container-fluid" id="nav-section">
      <h2
        className="text-center mt-5"
        style={{ color: "#e61b33", fontWeight: "bold" }}
      >
        Product Category
      </h2>
      <div className="d-flex gap-5 flex-wrap justify-content-center">
        {dataNav.category.map((e) => (
          <div
            className="nav-card"
            key={e.id}
            onClick={() => handleDetail(e.id)}
          >
            <Link to={``}>
              <img src={e.cover} alt="..." />
              <p className="text-center">{e.jenis} </p>
            </Link>
          </div>
        ))}
      </div>

      <div
        className="row container-fluid mt-5"
        style={{ height: "400px", overflow: "hidden" }}
      >
        {dataProduct[category].map((e) => (
          <Card
            category={category}
            key={e.id}
            cardkey={e.id}
            src={e.gambar}
            title={e.namaBarang}
            price={
              "Rp." +
              e.harga.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
            }
          />
        ))}
      </div>
      <Link to={"/product/"}>
        <button className="   btn btn-primary">pelajari Selengkapnya</button>
      </Link>
    </div>
  );
};

export default Navigasi;
