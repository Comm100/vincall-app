import { APPClient } from "comm100-app";
import { postAgentStatus } from "src/helper/AgentStatus";
import { updateTopBarStatus } from "src/helper/updateTopBar";

export const registerEvents = (contentWindow?: Window | null) => {
  const client = APPClient.init();
  client.on("agentconsole.livechat.chats.chatStarted", (args: any) => {
    updateTopBarStatus("busy");
    if (contentWindow) postAgentStatus(contentWindow, "agent-busy");
  });

  client.on("agentconsole.livechat.chats.chatEnded", async (args: any) => {
    const currentAgent = await client.get("currentAgent");
    if (currentAgent.chats <= 0) {
      updateTopBarStatus("available");
      if (contentWindow) postAgentStatus(contentWindow, "agent-free");
    }
  });
};
