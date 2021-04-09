import React from 'react';

function Editor({markdown, onChange}) {
  return (
    <div className="Editor">
      <textarea
        name="editor"
        id="editor"
        cols="60"
        rows="20"
        onChange={onChange}
      >
        {markdown}
      </textarea>
    </div>
  );
}

export default Editor;
