import {useState, useEffect} from 'react';

import {marked} from 'marked';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea name="editor" id="editor" cols="30" rows="10">
        # Enter markdown here ## See the output in the previewer
      </textarea>
      <div id="preview"></div>
    </div>
  );
}

export default App;
