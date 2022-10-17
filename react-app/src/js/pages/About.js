import React from "react";
import "../../css/Page.css";
import gif from "../../assets/development.gif";
import freelancer from "../../assets/freelancer.png";

function AboutPage() {
  return (
    <div>
      <div className="title">Welcome!</div>
      <div className="subtitle">I'm Adrian Factuall Nieściur,</div>
      <p>a self-taught developer - and this is my website.</p>
      <p>
        I started programming around the same time I learned how to ride a bike
        — 9yo me loved both, but the bike didn't have semicolons.
      </p>
      <p>
        Here you will find my resume, blog (soon), portfolio, and everything you
        may want to know about me. The site is still in development and you see
        its current state.
      </p>
      <div className="subtitle">Have fun exploring!</div>
      <img
        src={gif}
        style={{
          maxHeight: "40vh",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          transform: "translateY(-20%)",
        }}
      ></img>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          marginBottom: "1em",
          width: "calc(100% - 4vw)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <a
            href="https://www.linkedin.com/in/adrian-nie%C5%9Bciur-ab49341a1/"
            class="fa fa-linkedin"
          ></a>
          <a href="https://github.com/factuall" class="fa fa-github"></a>
          <a href="https://www.freelancer.com/u/factuall" class="fa">
            <img
              src={freelancer}
              style={{
                position: "absolute",
                width: "100%",
                top: "0",
                right: "0",
              }}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
