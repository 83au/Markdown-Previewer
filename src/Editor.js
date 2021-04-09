import {useRef} from 'react';
import './styles/window.css';

function Editor({markdown, onChange}) {
  const window = useRef();

  // const expand = () => {
  //   window.current.style.width = '100vw';
  //   window.current.style.height = '100vh';
  // };

  return (
    <div className="window" ref={window}>
      <h2 className="window__heading">
        Editor
        <span className="window__icon">
          <i className="fa fa-arrows-alt" aria-hidden="true"></i>
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
