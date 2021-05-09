import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./styles/css/Preview.css";

function Preview({ html }) {
  const [cleanHtml, setCleanHtml] = useState("");
  useEffect(() => {
    setCleanHtml(
      DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true },
      })
    );
  }, [html]);
  return (
    <div
      id="preview"
      className="Window__textarea"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    ></div>
  );
}

export default Preview;
