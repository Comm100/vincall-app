import { APPClient } from "comm100-app";

const client = APPClient.init();
export const initPopover = () => {
  return client.set("agentconsole.topBar.popover", {
    width: 337,
    height: 585
  });
};

export const openPopover = () => client.do("agentconsole.topBar.popover.open");

export const closePopover = () =>
  client.do("agentconsole.topBar.popover.close");

export const getPopoverStatus = () =>
  client.get("agentconsole.topBar.popover.status");

export const togglePopover = () =>
  client.do("agentconsole.topBar.popover.toggle");
