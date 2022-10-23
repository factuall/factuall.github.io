import React, { useEffect, useState } from "react";
import "../css/Background.css";

const SiteBackground = (props) => {
  const SIZE = 100; ///////////////////////////
  const MARGIN = 1; // in case I change my mind
  let hxsNeeded = Math.round(
    (window.innerWidth / (SIZE + MARGIN)) *
      (window.innerHeight / SIZE - (MARGIN - SIZE * 0.2885))
  );
  let tmpl = [];
  tmpl.length = hxsNeeded + 1;

  const [hexes, setHxs] = useState({ color: [...tmpl] });
  const rollColors = () => {
    let tmp = [];
    tmp.length = hxsNeeded + 1;
    for (let i = 0; i < hxsNeeded; i++)
      tmp[i] = Math.floor(Math.random() * 16) + 22;
    setHxs({ color: [...tmp] });
  };

  useEffect(() => {
    rollColors();
    const interval = setInterval(rollColors, 2500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main">
      <div className="background-container">
        {[...Array(hxsNeeded)].map((x, i) => (
          <div
            id={"hex" + i}
            style={{
              backgroundColor:
                "rgb(" +
                hexes.color[i] +
                "," +
                hexes.color[i] +
                "," +
                hexes.color[i] +
                ")",
              transition: "all 2s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default SiteBackground;
