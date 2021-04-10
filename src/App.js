import { useState, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';
import Editor from './Editor';
import Preview from './Preview';
import initialMarkdown from './initialMarkdown';
import marked from 'marked';

import './styles/App.css';

/* TODO: 
  Editor and Preview components are too similar. Use composition to create 1 component and configure it with props
*/

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const [html, setHtml] = useState(() => marked(markdown));

  const handleChange = evt => setMarkdown(evt.target.value);

  const preview = useRef();

  useEffect(() => setHtml(marked(markdown)), [markdown]);

  useEffect(() => {
    const cleanHtml = DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
    });
    preview.current.innerHTML = cleanHtml;
  }, [html]);

  return (
    <div className="App">
      <h1 className="App__heading">Markdown Previewer</h1>
      <Editor markdown={markdown} onChange={handleChange} />
      <Preview preview={preview} />
    </div>
  );
}

export default App;
