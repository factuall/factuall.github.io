import "../../css/Page.css";
import imgSudokuA from "../../assets/sudoku1.png";
import imgSudokuB from "../../assets/sudoku2.png";
import imgExtension from "../../assets/clickhelper1.png";
import imgHome from "../../assets/home.png";
import imgCalc from "../../assets/calc.png";
import imgTwitter from "../../assets/twitter.png";
import { useState, useContext } from "react";
import React from "react";
import vidMacro from "../../assets/extension.mp4";
import { Context } from "../Store";
function ScrollingPage({ children }) {
  return (
    <>
      <div className="ScrollingPage">{children}</div>
    </>
  );
}
function PortfolioPage() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [isVideoVisible, setVideoVisible] = useState(false);

  const [state, setState] = useContext(Context);
  return (
    <>
      <div
        style={{ display: isVideoOpen ? "flex" : "none" }}
        className={"video-showcase" + (isVideoVisible ? " show" : "")}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setVideoVisible(false);
            setTimeout(() => {
              setVideoOpen(false);
            }, 500);
            e.target.children[0].pause();
          }
        }}
      >
        <video src={vidMacro} className="video-box" controls></video>
      </div>
      <ScrollingPage>
        <div class="page-grid-cell-fill-container">
          <div class="page-grid-cell-fill-main">
            <p class="title" style={{ textAlign: "center" }}>
              Sudoku
            </p>
            <p>Sudoku written in C# in Unity Engine.</p>
            <p>
              Initially, the game was designed for smartphones/touchscreen, but
              I slightly modified it to fit browsers. It includes Sudoku puzzle
              generation for the player to solve with scoring and mode selection
              menu.
            </p>
            <p>
              Play Sudoku in the browser or{" "}
              <a href="https://github.com/factuall/Sudoku-Unity3D">
                Browse source code.
              </a>
            </p>
          </div>
          <div class="page-grid-cell-fill-rest">
            <div class="bottom-element">
              <div
                onClick={() => {
                  setState({ page: 100 });
                  setTimeout(() => {
                    window.location.href += "/sudoku/sudoku.html";
                  }, 800);
                }}
                class="button primary"
                style={{
                  position: "relative",
                  margin: "auto",
                  marginBottom: "5%",
                }}
              >
                Play Live Demo
              </div>

              <div class="page-grid-cell-screens">
                <img
                  src={imgSudokuA}
                  style={{ width: "100%", height: "100%" }}
                ></img>
                <img
                  src={imgSudokuB}
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </ScrollingPage>
      <ScrollingPage>
        <div className="page-grid-cell-fill-container">
          <div className="page-grid-cell-fill-main">
            <p className="title" style={{ textAlign: "center" }}>
              Macro extension
            </p>
            <p>
              Browser extension for Chrome that can record your actions and
              perform them again for you.
            </p>
            <p>
              Idea was to simplify very repetitive and redundant tasks with
              automation. Below you can see showcase video with indev version.
            </p>
            <p>
              <a href="https://github.com/factuall/Chrome-AUTO-TASK-Extension">
                Browse source code
              </a>{" "}
              or watch showcase video
            </p>
          </div>
          <div className="page-grid-cell-fill-rest">
            {/* <p style="text-align: center; font-size: 1.4em; text-decoration: underline;"></p> */}
            <div className="bottom-element">
              <div
                onClick={() => {
                  setVideoOpen(true);
                  setTimeout(() => {
                    setVideoVisible(true);
                  }, 10);
                }}
                className="button primary"
                style={{
                  position: "relative",
                  margin: "auto",
                  marginBottom: "5%",
                }}
              >
                Watch video
              </div>
              <div
                className="page-grid-cell-screens"
                style={{ flexDirection: "column" }}
              >
                <img
                  src={imgExtension}
                  style={{ position: "relative", width: "200%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollingPage>
      <ScrollingPage>
        <div className="page-grid-cell-fill-container">
          <div className="page-grid-cell-fill-main">
            <p className="title" style={{ textAlign: "center" }}>
              This website
            </p>
            <p>
              Website is hosted with GitHub pages, so there is no backend.{" "}
              <a href="https://github.com/factuall/factuall.github.io">
                Browse source code.
              </a>
            </p>
            <p>
              <a href="https://github.com/factuall/factuall.github.io/tree/react">
                React version
              </a>
              : You are right now browsing this version - React + SASS
            </p>
            <p>
              <a href="https://github.com/factuall/factuall.github.io/tree/original-static-version">
                Static version
              </a>
              : HTML+JS+CSS(SASS) - This was original, discontinued version of
              this website
            </p>
          </div>
          <div className="page-grid-cell-fill-rest">
            {/* <p style="text-align: center; font-size: 1.4em; text-decoration: underline;"></p> */}
            <div className="bottom-element" style={{ width: "100%" }}>
              <div style={{ textAlign: "center", marginBottom: "1%" }}>
                fun fact: there is domain with one "L" redirecting to this one.
              </div>
              {/* <div onclick="openLive('sudoku/')" class="button" style="position: relative; margin:auto; margin-bottom: 5%;">Run live demo</div> */}
              <div
                className="page-grid-cell-screens"
                style={{ flexDirection: "column" }}
              >
                <img src={imgHome} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </ScrollingPage>
      <ScrollingPage>
        <div className="page-grid-cell-fill-container">
          <div className="page-grid-cell-fill-main">
            <p className="title" style={{ textAlign: "center" }}>
              Alcohol Calculator
            </p>
            <p>
              Easy way to figure out how much of actuall alcohol is in your
              specific drink, and how much you pay for it. If you want to make
              the most of your budget, save or control your alcohol intake -
              this website will come in handy.
            </p>
            <p>
              It's hosted on this website, so source code can be found inside of
              its repo.
            </p>
          </div>
          <div className="page-grid-cell-fill-rest">
            <div className="bottom-element" style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  onClick={() => {
                    setState({ page: 100 });
                    setTimeout(() => {
                      window.location.href += "/calcalc/calcalc.html";
                    }, 800);
                  }}
                  className="button primary"
                  style={{
                    position: "relative",
                    margin: "auto",
                    marginBottom: "5%",
                  }}
                >
                  Open Calculator
                </div>
              </div>
              <div
                className="page-grid-cell-screens"
                style={{ flexDirection: "column" }}
              >
                <img
                  src={imgCalc}
                  style={{
                    width: "70%",
                    filter: "drop-shadow(0 0 0.3rem black)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollingPage>
      <ScrollingPage>
        <div className="page-grid-cell-fill-container">
          <div className="page-grid-cell-fill-main">
            <p className="title" style={{ textAlign: "center" }}>
              Twitter Bot
            </p>
            <p>
              Made with node.js and Twitter API notifies on{" "}
              <a href="https://twitter.com/WhatsEpicNow">@WhatsEpicNow</a>{" "}
              profile about free games available on Epic Games Store.
            </p>
            <p>
              Hopefully it will support Steam free games somewhere in the
              future.
            </p>
            <p>
              <a href="https://github.com/factuall/WhatsEpicNow">
                Browse source code
              </a>{" "}
              on GitHub.
            </p>
            <p></p>
          </div>
          <div className="page-grid-cell-fill-rest">
            <div className="bottom-element" style={{ width: "100%" }}>
              <div
                className="page-grid-cell-screens"
                style={{ flexDirection: "column" }}
              >
                <img
                  src={imgTwitter}
                  style={{
                    width: "100%",
                    filter: "drop-shadow(0 0 0.3rem black)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollingPage>
    </>
  );
}

export default PortfolioPage;
