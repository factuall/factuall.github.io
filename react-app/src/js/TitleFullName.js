import { useContext } from "react";
import { Context } from "./Store";
const TitleFullName = () => {
  const [state, setState] = useContext(Context);
  return (
    <div
      class="badge-base LI-profile-badge"
      data-locale="pl_PL"
      data-size="medium"
      data-theme="dark"
      data-type="VERTICAL"
      data-vanity="adrian-nieściur-ab49341a1"
      data-version="v1"
    >
      <a
        class="badge-base__link LI-simple-link"
        href="https://pl.linkedin.com/in/adrian-nie%C5%9Bciur-ab49341a1?trk=profile-badge"
      >
        <p className={state.page == 0 ? "FullName Show" : "FullName Hide"}>
          <div className="name-letter">A</div>
          <div className="name-letter">d</div>
          <div className="name-letter">r</div>
          <div className="name-letter">i</div>
          <div className="name-letter">a</div>
          <div className="name-letter">n</div>
          <div className="name-letter">&nbsp;</div>
          <div className="name-letter">N</div>
          <div className="name-letter">i</div>
          <div className="name-letter">e</div>
          <div className="name-letter">ś</div>
          <div className="name-letter">c</div>
          <div className="name-letter">i</div>
          <div className="name-letter">u</div>
          <div className="name-letter">r</div>
        </p>
      </a>
    </div>
  );
};
export default TitleFullName;
