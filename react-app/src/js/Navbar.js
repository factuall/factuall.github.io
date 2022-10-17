import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./Store";
import "../css/App.css";

const NavBar = () => {
  const [state, setState] = useContext(Context);
  const [cooledDown, setCooledDown] = useState(true);
  const handleClick = (val) => {
    if (cooledDown) {
      setState({ page: val });
      setCooledDown(false);
      setTimeout(() => {
        setCooledDown(true);
      }, 800);
    }
  };
  return (
    <>
      <button
        class={"Home" + (state.page == 0 ? " Hide" : " Show")}
        onClick={() => handleClick(0)}
      >
        🏠
      </button>
      <button class="nav" onClick={() => handleClick(1)}>
        about
      </button>
      <button class="nav" onClick={() => handleClick(2)}>
        portfolio
      </button>
      <button class="nav" onClick={() => handleClick(3)}>
        resume
      </button>
      <button class="nav" onClick={() => handleClick(4)}>
        contact me
      </button>
    </>
  );
};
export default NavBar;
