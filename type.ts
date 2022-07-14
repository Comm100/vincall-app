export type ChannelType = "deviceStatus" | "agentStatus";

export type AgentCallStatus =
  | "available"
  | "onCall"
  | "doNotDisturb"
  | "offline";

export type DeviceStatus =
  | "initializing"
  | "ready"
  | "end"
  | "outingCallingReject"
  | "incomingReject"
  | "outingCalling"
  | "outingCallingAccept"
  | "incoming"
  | "incomingAccept";

export type PhoneButtonStatus = "busy" | "calling" | "available" | "offline";

export type TransferPayload<T extends ChannelType> = {
  type: T extends "deviceStatus" ? DeviceStatus : AgentCallStatus;
  message?: any;
};

export type TransferMessage = {
  channel: ChannelType;
  payload: TransferPayload<ChannelType>;
};

export type ReceiveMessage = {
  from: string;
  data: TransferMessage;
};
