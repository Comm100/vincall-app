import { APPClient } from "comm100-app";
import { updateTopBarButtonAPI } from "src/constants/apiNames";
import { PhoneButtonStatus } from "../../type";
import { toCallTimeString } from "./formatTime";

let intervalTaskId: any = null;
let durationTime = 0;
export const updateTopBarStatus = (
  status: PhoneButtonStatus,
  enabledTimer?: boolean
) => {
  const client = APPClient.init();
  const updateInfo: { [key: string]: any } = {
    label: ""
  };
  switch (status) {
    case "calling":
      updateInfo.icon = "./images/calling.png";
      updateInfo.tooltip = "On Call";
      if (enabledTimer) {
        updateInfo.label = toCallTimeString(durationTime);
        intervalTaskId = setInterval(() => {
          updateInfo.label = toCallTimeString(durationTime++);
          client.set(updateTopBarButtonAPI, updateInfo);
        }, 1000);
      }
      client.set(updateTopBarButtonAPI, updateInfo);
      break;
    case "busy":
      updateInfo.icon = "./images/busy.png";
      updateInfo.tooltip = "Do Not Disturb";
      client.set(updateTopBarButtonAPI, updateInfo);
      break;
    case "offline":
      updateInfo.icon = "./images/Offline.png";
      updateInfo.tooltip = "offline";
      client.set(updateTopBarButtonAPI, updateInfo);
      break;
    default:
      updateInfo.icon = "./images/default.png";
      updateInfo.tooltip = "Available";
      if (intervalTaskId) {
        clearInterval(intervalTaskId);
        intervalTaskId = null;
        durationTime = 0;
      }
      client.set(updateTopBarButtonAPI, updateInfo);
      break;
  }
};
