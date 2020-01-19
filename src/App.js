import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Headline from "./components/headline";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />
      <Carousel />
    </div>
  );
}

export default App;
