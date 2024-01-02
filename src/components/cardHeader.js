import "./components.css";
import { useState } from "react";
function CardHeader(props) {
  const [height, setHeight] = useState("400px");
  const [open, setOpen] = useState("expand_more");
  const [more, setMore] = useState("Baca Selengkapnya");
  const { title, desc, img } = props;

  const handleClick = () => {
    if (height === "400px") {
      setHeight("700px");
      setOpen("expand_less");
      setMore(" ");
    } else {
      setHeight("400px");
      setOpen("expand_more");
      setMore(" Baca Selengkapnya");
    }
    console.log("more:", more);
  };
  return (
    <div className="col-md-4 mt-5 " id="cardHeader">
      <div className="cardHeader card  mx-auto " style={{ height: height }}>
        <div>
          <h1 className="text-center">{title}</h1>
          <div>
            <img src={img} style={{ width: "100%" }} className="img-fluid" />
            <p
              style={{ transitionAnimation: "0.5s" }}
              className="text-center"
            >{`${more}`}</p>
          </div>
        </div>
        <div className="text">
          <p>{desc}</p>

          <span
            onClick={handleClick}
            class="material-icons-outlined "
            style={{
              color: "red",
              fontSize: "50px",
              cursor: "pointer",
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {open}
          </span>
        </div>
      </div>
    </div>
  );
}

function Another() {
  return (
    <div className="row overflow-hidden container-fluid mx-auto my-5">
      <CardHeader
        img="https://www.hondacengkareng.com/wp-content/uploads/2011/02/Honda-CBR-250RR.jpg"
        title="Tentang Produk honda"
        desc=" Produk Honda dikenal sebagai motor irit BBM yang tangguh dan tahan lama. Motor honda terkenal dengan nilai jualnya yang tinggi. Harga pada motor honda tergolong stabil di pasaran motor bekas, dan sparepart dari produk honda sangat mudah untuk dijumpai. Honda juga terkenal dengan after-sales service berkualitas dan dapat diandalkan.
"
      />
      <CardHeader
        title="Keunggulan Service Honda "
        img="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,pr-true/uploads/article/thumbnail/servis-sepeda-motor-honda-tanpa-ketar-ketir-ke-ahass-saja-10122021-041537.jpg"
        desc=" Keunggulan dari service pada Ahass yaitu mendapat penanganan yang sesuai dengan standart pabrik, sparepart yang terjamin original, montir yang profesional  dan terlatih di bidangnya"
      />
      <CardHeader
        img="https://www.hondacengkareng.com/wp-content/uploads/2021/12/sparepart-1-1024x625.jpg"
        title=" Parts Original Honda"
        desc="Dengan menggunakan spare part asli, keamanan berkendara akan lebih terjamin karena kualitas spare part yang terpercaya. Tahan Lama. Spare part asli / genuine juga mampu bertahan lebih lama daripada yang bukan asli / genuine. Karena mampu bertahan lebih lama, dengan menggunakan spare part asli maka akan lebih irit dalam hal perawatan motor kawan-kawan. Spare part asli sudah disesuaikan dengan spesifikasi motor Honda sehingga lebih presisi dan sesuai dengan motor kawan-kawan."
      />
    </div>
  );
}

export default Another;
