import './styles/Preview.css';

function Preview({ preview }) {
  return (
    <div id="preview" className="Window__textarea" ref={preview}></div>
  );
}

export default Preview;
