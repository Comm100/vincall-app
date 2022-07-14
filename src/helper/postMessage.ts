export const postMessage = (contentWindow: Window, data: any) => {
  contentWindow.postMessage(data, "*");
};
