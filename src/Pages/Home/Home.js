import React from "react";
import Banner from "./Components/Banner";
import COVID19 from "./Components/COVID19";
import Doctors from "./Components/Doctors/Doctors";
import Founder from "./Components/Founder/Founder";
import TopServices from "./Components/TopServices/TopServices";
import "./Home.css";
const Home = () => {
  return (
    <div id="home-page" className="mb-5">
      <Banner />
      <COVID19 />
      <TopServices />
      <Doctors />
      <Founder />
    </div>
  );
};

export default Home;
