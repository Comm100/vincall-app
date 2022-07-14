import { APPClient } from "comm100-app";
import { postMessage } from "src/helper/postMessage";

export const updateAgentStatus = (status: "online" | "away") => {
  const client = APPClient.init();
  client.set("currentAgent.status", status);
};

export const postAgentStatus = (
  contentWindow: Window,
  status: "agent-busy" | "agent-free"
) => {
  postMessage(contentWindow, status);
};
