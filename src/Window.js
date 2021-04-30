import { useState } from "react";
import "./styles/css/window.css";

function Window({ title, children }) {
  const [expand, setExpand] = useState(false);
  const handleClick = () => setExpand(prevExpand => !prevExpand);

  let styles;
  if (expand) {
    styles = {
      position: "absolute",
      top: "0",
      zIndex: "10",
      maxWidth: "100vw",
      width: "100%",
      height: "100%",
    };
  } else {
    styles = {};
  }

  return (
    <div className="Window" style={styles}>
      <h2 className="Window__heading">
        {title}
        <span className="Window__icon" onClick={handleClick}>
          <i
            className={`fa ${expand ? "fa-compress" : "fa-arrows-alt"}`}
            aria-hidden="true"
          ></i>
        </span>
      </h2>
      {children}
    </div>
  );
}

export default Window;