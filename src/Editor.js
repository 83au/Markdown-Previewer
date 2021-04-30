import "./styles/css/window.css";

function Editor({ markdown, onChange }) {
  return (
    <textarea
        className="Window__textarea"
        name="editor"
        id="editor"
        onChange={onChange}
      >
        {markdown}
      </textarea>
  );
}

export default Editor;
