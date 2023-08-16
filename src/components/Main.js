import React from "react";
import Card from "./Card";
import firstImage from "../assets/images/image-retro-pcs.jpg";
import secondImage from "../assets/images/image-top-laptops.jpg";
import thirdImage from "../assets/images/image-gaming-growth.jpg";
import web3ImageDesktop from "../assets/images/image-web-3-desktop.jpg";
import web3imageMobile from "../assets/images/image-web-3-mobile.jpg";

export default function Main() {
  return (
    <div className="main-content">
      <section className="desktop-top-section">
        <section id="Home" className="home-section-section">
          <div className="home-section">
            <figure className="web3-mobile">
              <img src={web3imageMobile} width="686" height="600"></img>
            </figure>
            <figure className="web3-desktop">
              <img src={web3ImageDesktop} width="1460" height="600"></img>
            </figure>
            <div className="home-text-content">
              <h1>The Bright Future of Web 3.0?</h1>
              <div className="home-para-button">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="home-readmore" type="button">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="New" className="new-section-section">
          <div className="new-section">
            <h2>New</h2>
            <h3>Hyderogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr></hr>
            <h3>The Downside of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              geberations?
            </p>
            <hr></hr>
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </section>
      </section>
      <section id="Popular" className="popular-section-section">
        <div className="popular-section">
          <Card
            key="01"
            id="01"
            title="Reviving Retro PCs"
            para="What happens when old PCs are given modern upgrades?"
            img={firstImage}
          />
          <Card
            key="02"
            id="02"
            title="Top 10 Laptops of 2022"
            para="Our best picks for various needs and budgets."
            img={secondImage}
          />
          <Card
            key="03"
            id="03"
            title="The Growth of Gaming"
            para="How the pandemic has sparked fresh opportunities."
            img={thirdImage}
          />
        </div>
      </section>
    </div>
  );
}
