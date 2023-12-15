import Navbar from "./components/navbar";
import Card from "./components/card";
import data from "./data.json"
function App() {
  const Data = data
  return (
    <div>
      <Navbar/>
      {Data.map((e) => (
        <Card
        desc= {e.deskripsi}
        src = {e.gambar}/>

      ))}
    </div>
  );
}

export default App;
