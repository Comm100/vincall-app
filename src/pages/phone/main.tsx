import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import { receiveMessageHandle } from "./messageHandle";
import { popperContentUrl } from "src/config";
import { initPopover } from "../../helper/popperManager";
import { registerEvents } from "./eventHandle";

const App = () => {
  const iframeRef = useRef<HTMLIFrameElement>();

  useEffect(() => {
    window.addEventListener("message", receiveMessageHandle, false);
    registerEvents(iframeRef.current?.contentWindow);
    initPopover();
  }, []);

  return (
    <iframe
      ref={iframeRef as any}
      src={`${popperContentUrl}${window.location.search}`}
      width="100%"
      height="100%"
      frameBorder={0}
      allow="camera *; microphone *"
    />
  );
};

render(<App />, document.getElementById("main"));
