import { useContext, useState, useEffect, useRef } from "react";
import { Context } from "./Store";

const Page = (props) => {
  const [state, setState] = useContext(Context);
  const [show, setShow] = useState("");
  const [goDown, setGoDown] = useState("");
  useEffect(() => {
    setShow(props.index == state.page);
    setGoDown(state.page == 0 ? "down" : "");
  }, [state]);
  return (
    <>
      <div className={"Page " + show + goDown}>{props.children}</div>
    </>
  );
};

const ScrollingPages = ({ children }) => {
  const container = useRef(null);
  const [scroll, setScroll] = useState({ x: 0 });
  var scrollableElement = document.body;
  scrollableElement.addEventListener("wheel", (event) => {
    //scroll with range check
    let targetScroll = scroll.x + event.wheelDelta;
    let containerWidth = container.current ? container.current.offsetWidth : 0;
    if (targetScroll > 0) {
      setScroll({ x: 0 });
    } else if (window.innerWidth - containerWidth - targetScroll > 0) {
      setScroll({ x: -containerWidth + window.innerWidth });
    } else {
      setScroll({ x: targetScroll });
    }
  });
  return (
    <>
      <div
        className="ScrollingPages"
        ref={container}
        style={{ left: scroll.x }}
      >
        {children}
      </div>
    </>
  );
};

const OnePage = ({ children }) => {
  return <div className="OnePage">{children}</div>;
};
export { Page, OnePage, ScrollingPages };
