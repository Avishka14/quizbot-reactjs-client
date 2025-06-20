import React from "react";
import LandingPage from "./components/Landing-Page/LandingPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import History from "./components/History/History";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="history" element={<History/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </>
  );
}

export default App;
