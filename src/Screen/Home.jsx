import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Information from "../Components/Information/Information";
import Choose from "../Components/Choose/Choose";
import Portfolio from "../Components/Portfolio/Portfolio";
import Pricing from "../Components/Pricing/Pricing";
import Testimonials from "../Components/Testimonials/Testimonials";
import Statistics from "../Components/Statistics/Statistics";
import Client from "../Components/Client/Client";
import { useEffect, useState } from "react";
import Team from "../Components/Team/Team";
import Preview from "../Components/preview-contact/Preview";
import Blog from "../Components/Blog/Blog";

const Home = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <>
      <Navbar scrollHeight={scroll} />
      <Header />
      <Information />
      <Choose />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Statistics />
      <Client />
      <Team />
      <Preview />
      <Blog />
    </>
  );
};

export default Home;
