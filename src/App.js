import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function start() {
      setScroll(true);
    }
    window.addEventListener("scroll", start);

    return () =>
      window.removeEventListener("scroll", start);
  }, []);
  useEffect(() => {
    function start() {
      setScroll(false);
    }
    window.addEventListener("scrollend", start);

    return () =>
      window.removeEventListener("scrollend", start);
  }, []);
  return (
    <BrowserRouter>
      <Header scroll={scroll} />

      <Banner />
    </BrowserRouter>
  );
}

export default App;
