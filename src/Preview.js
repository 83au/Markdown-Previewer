import './styles/Preview.css';

function Preview({ preview }) {
  return (
    <div id="Preview" className="Window__textarea" ref={preview}></div>
  );
}

export default Preview;
