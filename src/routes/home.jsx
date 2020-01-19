import React from "react";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Headline from "../components/headline";
import Content from "../components/content";
import Sidebar from "../components/sidebar";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Headline />
      <Carousel />
      <Sidebar />
      <Content />
    </div>
  );
}

export default Home;
