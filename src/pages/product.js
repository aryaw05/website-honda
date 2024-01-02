import Card from "../components/card";
import data from "../data.json";
function Product() {
  const Data = data;
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="text-center"> Product </h1>
      <div>
        <div className="container-fluid row p-5">
          {Object.keys(Data).map((category) => (
            <div key={category}>
              <h2 id={category}>{category}</h2>
              <div className="row mb-5 ">
                {Data[category].map((item, index) => (
                  <Card
                    category={category}
                    key={index}
                    cardkey={item.id}
                    src={item.gambar}
                    title={item.namaBarang}
                    price={
                      "Rp." +
                      item.harga.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })
                    }
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
