import {useState, useEffect, useRef} from 'react';
import marked from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`
  # Hello World!

  ## This is a subheading

  _This is italic_
`);

  const [html, setHtml] = useState(() => marked(markdown));

  const preview = useRef();

  useEffect(() => {
    setHtml(marked(markdown));
  }, [markdown]);

  useEffect(() => {
    preview.current.innerHTML = html;
  }, [html]);

  const handleChange = evt => {
    setMarkdown(markdown => evt.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea
        name="editor"
        id="editor"
        cols="30"
        rows="10"
        onChange={handleChange}
      >
        {markdown}
      </textarea>
      <div id="preview" ref={preview}></div>
    </div>
  );
}

export default App;
