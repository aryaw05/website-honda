import { Link } from "react-router-dom";

function Sparepart() {
  const data = [
    {
      "Nama barang": "Cover R Step Arm Inner – PCX 150 K97",
      Harga: 14000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2018/07/Cover-R-Step-Arm-Inner-50731K97T00ZA.jpg",
    },
    {
      "Nama barang":
        "Cowl Assy L Inner Middle – New CBR 150R K45G & New CBR 150R K45N",
      Harga: 122000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2016/11/COWL-ASSY-L-INNER-MIDDLE-6443AK45N40-300x300.jpg",
    },
    {
      "Nama barang":
        "Baut (Bolt Seat Hingem) – Sonic 150R K56, Revo FI, Supra GTR K56F",
      Harga: 2000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2019/09/90105KPH901.jpg",
    },
    {
      "Nama barang":
        "Baut (Bolt Washer 6×16) – BeAT eSP K81, Scoopy FI eSP, Vario 125 eSP, Vario 150 eSP",
      Harga: 1200,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2019/05/934040601600.jpg",
    },
    {
      "Nama barang": "Cover Comp Radiator – PCX 150 K97",
      Harga: 85000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2018/08/Cover-Comp.Radiator-19150K97T00.jpg",
    },
    {
      "Nama barang":
        "Rubber Link Stopper – BeAT FI, Scoopy FI & Vario 110 Karbu",
      Harga: 11000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2017/12/Rubber-Link-Stopper-50352KVB900.jpg",
    },
    {
      "Nama barang": "Mark Combi Brake Sid Type 2 (Hitam) – PCX 150 K97",
      Harga: 7500,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2018/06/Mark-Combi-Brke-Sid-Typ2-86611K97N00ZC.jpg",
    },
    {
      "Nama barang":
        "Bearing Rad Ball 6902U – BeAT eSP (K81), BeAT Sporty eSP, Vario Karbu, Vario 125 FI, Vario 125 eSP, Vario 150 eSP & Vario 110 eSP",
      Harga: 27000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2018/02/Bearing-Rad-Ball-6902U-91002GA7701.jpg",
    },
    {
      "Nama barang": "Step Floor – New BeAT eSP",
      Harga: 117000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2016/11/Step-Floor-64310K81N00ZA.jpg",
    },
    {
      "Nama barang":
        "Relay Stater – BeAT CB150 Verza, Vario 150 eSP, Supra GTR 150",
      Harga: 27000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2017/12/Relay-Comp-Start-38501KVZ631.jpg",
    },
    {
      "Nama barang":
        "Gasket Cylinder Head (NLK) – Supra GTR 150, New CB150R Streetfire K15G, New CB150R Streetfire K15M & New CBR 150R K45G",
      Harga: 19000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2017/12/Gasket-Cylinder-Head-NLK-12251K56N02.jpg",
    },
    {
      "Nama barang":
        "Rectifier Comp Regulator (Kiprok) – BeAT Karburator, Spacy",
      Harga: 118000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2017/11/Rectifier-Comp-Regulator-31600KVBN51.jpg",
    },
    {
      "Nama barang": "Plate Clutch – CBR 250RR K64",
      Harga: 54000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2020/03/Plate-Clutch-22321ML7000.jpg",
    },
    {
      "Nama barang":
        "Bearing Needle 20X29X18 – BeAT eSP (K25), Spacy, Spacy FI, Scoopy eSP (K16), Vario 125 eSP & Vario 150 eSP",
      Harga: 47000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2017/12/Bearing-Needle-20X29X18-91109KVY901.jpg",
    },
    {
      "Nama barang": "Kampas Kopling Ganda – BeAT FI, Spacy & Vario 110",
      Harga: 167000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2017/11/22535KZLA00.jpg",
    },
    {
      "Nama barang":
        "Handle Rem Kanan – New CB150R StreetFire K15G, New CBR 150R K45N & New CB150R Streetfire K15M",
      Harga: 56000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2017/10/Lever-R-Steering-Handle-53175KPNE01.jpg",
    },
    {
      "Nama barang": "Baut (Bolt Stud 8×25) – CBR 150R, Sonic 150R, Supra GTR",
      Harga: 3000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2019/04/92900080250E.jpg",
    },
    {
      "Nama barang":
        "Rubber Protector Pack – New CBR 150R K45G, CRF 150L, New CB150R Streetfire K15G & New CB150R Streetfire K15M",
      Harga: 8000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2018/04/Rubber-Protector-Pack-18293MCAA20.jpg",
    },
    {
      "Nama barang": "Fender B FR – Sonic 150R",
      Harga: 31000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2017/01/61200K56N00-Fender-B-FR.jpg",
    },
    {
      "Nama barang":
        "Shock Breaker (Cushion Assy Rear) – PCX 150 K97 & PCX Hybrid",
      Harga: 223000,
      Gambar:
        "https://www.hondacengkareng.com/wp-content/uploads/2019/01/52400K97305.png",
    },
  ];
  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "120px" }}>
        Sparepart
      </h1>
      <div className="row container-fluid mb-5">
        {data.map((item, index) => (
          <div className=" col-md-2 mb-4">
            <div
              className="card mx-auto"
              style={{ maxWidth: "15rem" }}
              key={index}
            >
              <img
                className="card-img-top img-fluid"
                src={item.Gambar}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text ">
                  {item["Nama barang"].slice(0, 32)}...
                  <Link className="text-black">Selengkapnya</Link>
                </p>
                <h2 className="card-text">
                  Rp
                  {item.Harga.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sparepart;
