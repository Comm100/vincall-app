import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import { callPanelUrl } from "src/config";
import { registerEvents } from "./eventHandle";

const App = () => {
  const iframeRef = useRef<HTMLIFrameElement>();

  useEffect(() => {
    registerEvents(iframeRef.current?.contentWindow);
  }, []);

  return (
    <iframe
      ref={iframeRef as any}
      src={`${callPanelUrl}${window.location.search}`}
      width="100%"
      height="100%"
      frameBorder={0}
      allow="camera *; microphone *"
    />
  );
};

render(<App />, document.getElementById("main"));
