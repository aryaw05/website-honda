import Navbar from "./components/navbar";
import Card from "./components/card";
import Product from "./pages/product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DetailPage from "./pages/detail";
import Footer from "./components/footer";
import Dealer from "./pages/dealer";
function App() {
  return (
    <div>
      <Navbar />
      {/* {Data.Sport.map((e) => (
        <Card  src={e.gambar} title={e.namaBarang} />
      ))} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/dealer" element={<Dealer />} />
      </Routes>

      {/* <Carousel />
      <NavSection />
      <div>
        <div className="container-fluid row p-5">
          {Data.Sport.map((e) => (
            <Card src={e.gambar} title={e.namaBarang} desc={e.harga} />
          ))}
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default App;
