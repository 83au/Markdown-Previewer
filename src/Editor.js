import { useState, useRef } from 'react';
import './styles/window.css';

function Editor({ markdown, onChange }) {
  const [expand, setExpand] = useState(false);
  const window = useRef();

  let styles;
  if (expand) {
    styles = {
      position: 'absolute',
      top: '-1rem',
      zIndex: '10',
      maxWidth: '100vw',
      width: '100%',
      height: '100%',
    };
  } else {
    styles = {};
  }

  const handleClick = () => setExpand(!expand);

  return (
    <div className="window" ref={window} style={styles}>
      <h2 className="window__heading">
        Editor
        <span className="window__icon" onClick={handleClick}>
          <i
            className={`fa ${expand ? 'fa-compress' : 'fa-arrows-alt'}`}
            aria-hidden="true"
          ></i>
        </span>
      </h2>
      <textarea
        className="window__textarea"
        name="editor"
        id="editor"
        onChange={onChange}
      >
        {markdown}
      </textarea>
    </div>
  );
}

export default Editor;
