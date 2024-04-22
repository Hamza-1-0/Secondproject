import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Information from "../Components/Information/Information";
import Choose from "../Components/Choose/Choose";
import Portfolio from "../Components/Portfolio/Portfolio";
import Pricing from "../Components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Information />
      <Choose />
      <Portfolio />
      <Pricing />
    </>
  );
};

export default Home;
