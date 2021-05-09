import { useState, useEffect } from "react";
import marked from "marked";

import Window from "./Window";
import Editor from "./Editor";
import Preview from "./Preview";
import initialMarkdown from "./initialMarkdown";

import "./styles/css/App.css";

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const [html, setHtml] = useState(() => marked(markdown));

  const handleChange = evt => setMarkdown(evt.target.value);

  useEffect(() => setHtml(marked(markdown)), [markdown]);

  return (
    <div className="App">
      <h1 className="App__heading">Markdown Previewer</h1>
      <div className="App__container">
        <Window title="Editor">
          <Editor markdown={markdown} onChange={handleChange} />
        </Window>
        <Window title="Preview">
          <Preview html={html} />
        </Window>
      </div>
    </div>
  );
}

export default App;
