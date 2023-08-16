import React from "react";

export default function Header() {
  return (
    <div className="header-section">
      <a href="#Home">
        <div className="header-logo"></div>
      </a>
      <section className="menu-list">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#New">New</a>
          </li>
          <li>
            <a href="#Popular">Popular</a>
          </li>
          <li>
            <a href=""></a>Trending
          </li>
          <li>
            <a href=""></a>Categories
          </li>
        </ul>
      </section>
    </div>
  );
}
