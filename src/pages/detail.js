import data from "../data.json";
function DetailPage() {
  const Data = data;
  const productName = localStorage.getItem("name");
  const KeyName = localStorage.getItem("key");
  // const productImage = localStorage.getItem("image");
  // const productDescription = localStorage.getItem("desc");
  return (
    <div>
      {Data[KeyName] ? (
        Data[KeyName].map((item, index) => (
          <div key={index}>
            <img className="card-img-top" alt="..." />
            <h1>{item.name}</h1>
            <p></p>
          </div>
        ))
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}
export default DetailPage;
