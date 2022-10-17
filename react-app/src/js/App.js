import React, { useContext, useEffect, useRef, useState } from "react";
import Store from "./Store";
import { Context } from "./Store";
import "../css/App.css";
import AboutPage from "./pages/About";
import ResumePage from "./pages/Resume";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import SiteBackground from "./Background";
import NavBar from "./Navbar";
import TitleFullName from "./TitleFullName";
import { Page, OnePage, ScrollingPages } from "./Pages";

const WebContent = () => {
  const [state, setState] = useContext(Context);
  const [exiting, setExiting] = useState({ page: 0 });
  useEffect(() => {
    setTimeout(() => {
      setExiting(state);
    }, 800);
  }, [state]);
  return (
    <div>
      <SiteBackground></SiteBackground>
      <div className="NameHolder">
        <TitleFullName />
      </div>
      <div className={state.page > 0 ? "NavBar" : "NavBar Down"}>
        <NavBar />
      </div>
      {(state.page == 1 || exiting.page == 1) && (
        <Page index="1">
          <OnePage>
            <AboutPage></AboutPage>
          </OnePage>
        </Page>
      )}
      {(state.page == 2 || exiting.page == 2) && (
        <Page index="2">
          <ScrollingPages>
            <PortfolioPage></PortfolioPage>
          </ScrollingPages>
        </Page>
      )}
      {(state.page == 3 || exiting.page == 3) && (
        <Page index="3">
          <OnePage>
            <ResumePage></ResumePage>
          </OnePage>
        </Page>
      )}
      {(state.page == 4 || exiting.page == 4) && (
        <Page index="4">
          <OnePage>
            <ContactPage></ContactPage>
          </OnePage>
        </Page>
      )}

      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Store>
          <WebContent></WebContent>
        </Store>
      </header>
    </div>
  );
}

export default App;
