import React from 'react';
import './styles/window.css';

function Preview({preview}) {
  return (
    <div className="window">
      <h2 className="window__heading">
        Preview
        <span className="window__icon">
          <i className="fa fa-arrows-alt" aria-hidden="true"></i>
        </span>
      </h2>
      <div id="preview" className="window__textarea" ref={preview}></div>
    </div>
  );
}

export default Preview;
