import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div className="total-content">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}
