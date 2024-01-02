import React from "react";

import data from "../data.json";
import NavSection from "../components/navSection";
import Carousel from "../components/carousel";
import CorporateHome from "./corporateHome";
// import CardHeader from "../components/cardHeader";
import Another from "../components/cardHeader";
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
      <Another />
    </div>
  );
}
export default Home;
//
