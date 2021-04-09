import {useState, useEffect, useRef} from 'react';
import Editor from './Editor';
import marked from 'marked';
import './styles/App.css';

function App() {
  const [markdown, setMarkdown] = useState(`
  # Welcome to my Markdown Previewer!

  ## This is a subheading...

  [This is a project for FreeCodeCamp](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)

  Here's some code: \`<div></div>\`

  Here's some more code:

  \`\`\`javascript
  const greeting = 'Hello from markdown!';
  alert(greeting);
  \`\`\`

  - This is a list item
  
  1. This is a numbered list item

  > This is a block quote

  Here's an image
  
  ![logo](./logo192.png "Logo")

  And last but not least, here is some __bolded text__
  `);

  const [html, setHtml] = useState(() => marked(markdown));

  const handleChange = evt => setMarkdown(evt.target.value);

  const preview = useRef();

  useEffect(() => setHtml(marked(markdown)), [markdown]);

  useEffect(() => (preview.current.innerHTML = html), [html]);

  return (
    <div className="App">
      <h1 className="App__heading">Markdown Previewer</h1>
      <Editor markdown={markdown} onChange={handleChange} />
      <div id="preview" ref={preview}></div>
    </div>
  );
}

export default App;
