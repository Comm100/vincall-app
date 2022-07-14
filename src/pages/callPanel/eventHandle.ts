import { APPClient } from "comm100-app";
import { postAgentStatus } from "src/helper/AgentStatus";

export const registerEvents = (contentWindow?: Window | null) => {
  const client = APPClient.init();
  client.on("agentconsole.livechat.chats.chatStarted", (args: any) => {
    if (contentWindow) postAgentStatus(contentWindow, "agent-busy");
  });

  client.on("agentconsole.livechat.chats.chatEnded", async (args: any) => {
    const currentAgent = await client.get("currentAgent");
    if (currentAgent.chats <= 0) {
      if (contentWindow) postAgentStatus(contentWindow, "agent-free");
    }
  });
};
