import {useState, useEffect, useRef} from 'react';
import Editor from './Editor';
import Preview from './Preview';
import initialMarkdown from './initialMarkdown';
import marked from 'marked';

import './styles/App.css';

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const [html, setHtml] = useState(() =>
    marked(markdown, {
      breaks: true,
      gfm: true,
    })
  );

  const handleChange = evt => setMarkdown(evt.target.value);

  const preview = useRef();

  useEffect(() => setHtml(marked(markdown)), [markdown]);

  useEffect(() => (preview.current.innerHTML = html), [html]);

  return (
    <div className="App">
      <h1 className="App__heading">Markdown Previewer</h1>
      <Editor markdown={markdown} onChange={handleChange} />
      <Preview preview={preview} />
    </div>
  );
}

export default App;
