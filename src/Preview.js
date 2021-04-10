import { useState } from 'react';
import './styles/window.css';

function Preview({ preview }) {
  const [expand, setExpand] = useState(false);
  const handleClick = () => setExpand(!expand);

  let styles;
  if (expand) {
    styles = {
      position: 'fixed',
      top: '-1rem',
      zIndex: '10',
      maxWidth: '100vw',
      width: '100%',
      height: '100%',
    };
  } else {
    styles = {};
  }

  return (
    <div className="window" style={styles}>
      <h2 className="window__heading">
        Preview
        <span className="window__icon" onClick={handleClick}>
          <i
            className={`fa ${expand ? 'fa-compress' : 'fa-arrows-alt'}`}
            aria-hidden="true"
          ></i>
        </span>
      </h2>
      <div id="preview" className="window__textarea" ref={preview}></div>
    </div>
  );
}

export default Preview;
