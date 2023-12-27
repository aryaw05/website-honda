import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import data from "../data.json";
import NavSection from "../components/navSection";
import Carousel from "../components/carousel";
import CorporateHome from "./corporateHome";
function Home() {
  const Data = data;
  return (
    <div>
      {/* {Data.Sport.map((e) => (
          <Card  src={e.gambar} title={e.namaBarang} />
        ))} */}

      <Carousel />

      {/* nav section */}

      <NavSection />
      <CorporateHome />

      {/* <div>
        <div className="container-fluid row p-5">
          {Data.Matic.map((e, index) => (
            <Card
              key={index}
              src={e.gambar}
              title={e.namaBarang}
              price={e.harga}
              // desc = {e.deskripsi}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
export default Home;
// import React, { useState } from "react";
// import Navbar from "../components/navbar";
// import Card from "../components/card";
// import data from "../data.json";
// import NavSection from "../components/navSection";
// import Carousel from "../components/carousel";

// function Home() {
//   const Data = data;
//   const [selectedCategory, setSelectedCategory] = useState("Matic");

//   return (
//     <div>
//       <Navbar />

//       <Carousel />

//       {/* nav section */}
//       <div className="nav-section mt-5">
//         <h2 className="text-center">Product Category</h2>
//         <div className="d-flex gap-5 justify-content-center">
//           {Object.keys(Data).map((category, index , ) => (
//             <NavSection
//               key={index}
//               src={category.cover}
//               title={category}
//               onClick={() => setSelectedCategory(category)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content based on selected category */}
//       <div className="container-fluid row p-5">
//         {Data[selectedCategory] &&
//           Data[selectedCategory].map((e, index) => (
//             <Card
//               key={index}
//               src={e.gambar}
//               title={e.namaBarang}
//               price={e.harga}
//             />
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
