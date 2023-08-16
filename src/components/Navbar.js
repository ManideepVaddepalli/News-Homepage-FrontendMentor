import React from "react";

export default function Navbar() {
  function checkBoxClicked() {
    try {
      let slidebar = document.getElementById("slide-bar");
      let checkbox = document.getElementById("checkbox");
      if (checkbox.checked) {
        slidebar.style.display = "block";
        const slidebarslidedisplay = () => {
          slidebar.style.transform = "translateX(0)";
        };
        setTimeout(slidebarslidedisplay, 1);
        // slidebar.style.transform = "translateX(0)";
      } else {
        const slidebarNone = () => {
          if (checkbox.checked) {
            return;
          }
          slidebar.style.display = "none";
        };
        setTimeout(slidebarNone, 500);
        slidebar.style.transform = "translateX(80vw)";
      }
    } catch {}
  }
  return (
    <div className="total-nav-container">
      <input id="checkbox" onClick={checkBoxClicked} type="checkbox"></input>
      <div className="button-lines-container">
        <span className="common-lines firstline"></span>
        <span className="common-lines secondline"></span>
        <span className="common-lines thirdline"></span>
      </div>
      <div id="slide-bar" className="slide-bar">
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
            <a>Trending</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
