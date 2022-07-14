import { APPClient } from "comm100-app";
import { updateTopBarStatus } from "src/helper/updateTopBar";
import { updateAgentStatus } from "../../helper/AgentStatus";
import { openPopover } from "../../helper/popperManager";
import { TransferMessage, TransferPayload } from "../../../type";

const sendNotify = (message: string) => {
  const client = APPClient.init();
  client.do("agentconsole.notification.notify", {
    title: "New Call",
    message
  });
};

const agentStatusHandle = (payload: TransferPayload<"agentStatus">) => {
  switch (payload.type) {
    case "available":
      updateTopBarStatus("available");
      break;
    case "doNotDisturb":
      updateTopBarStatus("busy");
      break;
    case "offline":
      updateTopBarStatus("offline");
      break;
    case "onCall":
      updateTopBarStatus("calling");
      break;
  }
};

const deviceStatusHandle = (payload: TransferPayload<"deviceStatus">) => {
  switch (payload.type) {
    case "incoming":
      sendNotify(`${payload.message?.from} is calling.`);
      updateTopBarStatus("calling");
      openPopover();
      break;
    case "outingCalling":
      updateTopBarStatus("calling");
      break;
    case "incomingAccept":
    case "outingCallingAccept":
      updateAgentStatus("away");
      updateTopBarStatus("calling", true);
      break;
    case "end":
      updateAgentStatus("online");
      updateTopBarStatus("available");
      break;
    case "outingCallingReject":
    case "incomingReject":
      updateTopBarStatus("available");
      break;
  }
};

export const receiveMessageHandle = ({
  data
}: MessageEvent<TransferMessage>) => {
  switch (data.channel) {
    case "agentStatus":
      agentStatusHandle(data.payload);
      break;
    case "deviceStatus":
      deviceStatusHandle(data.payload);
      break;
  }
};
