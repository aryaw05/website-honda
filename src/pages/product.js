import Card from "../components/card";
import data from "../data.json";
function Product() {
  const Data = data;
  return (
    <div style={{ paddingTop: "100px" }}>
      <h1 className="text-center"> Product </h1>
      <div>
        <div className="container-fluid row p-5">
          {Object.keys(Data).map((category) => (
            <div key={category}>
              <h2 id={category}>{category}</h2>
              <div className="row">
                {Data[category].map((item, index) => (
                  <Card
                    key={index}
                    cardKey={index}
                    src={item.gambar}
                    title={item.namaBarang}
                    desc={item.deskripsi.substring(0, 100)}
                    price={item.harga}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
