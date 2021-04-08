import {useState, useEffect, useRef} from 'react';
import marked from 'marked';
import './App.css';

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

  ![logo](./logo512.png "Logo")

  And last but not least, here is some __bolded text__
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
