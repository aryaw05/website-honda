import "./components.css";
import { Link } from "react-router-dom";

function NavSection() {
  const data = {
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

  const handleLinkClick = (jenis) => {
    // Menunda pengguliran selama 1 detik (1000 milidetik)
    setTimeout(() => {
      const targetElement = document.getElementById(jenis);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="nav-section mt-5 container-fluid" id="nav-section">
      <h2 className="text-center">Product Category</h2>
      <div className="d-flex gap-5 flex-wrap justify-content-center">
        {data.category.map((e) => (
          <div key={e.id}>
            <Link
              to={`/product/#${e.jenis}`}
              onClick={() => handleLinkClick(e.jenis)}
            >
              <img src={e.cover} alt="..." />
              <p className="text-center">{e.jenis} </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavSection;
