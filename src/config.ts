export const apiDomain =
  process.env.NODE_ENV === "production"
    ? "https://api.vincall.net"
    : "https://apitest.vincall.net";

export const defaultSiteId = "10000";

export const oauthDomain =
  process.env.NODE_ENV === "production"
    ? "https://oauth.vincall.net"
    : "https://oauthtest.vincall.net";

export const vincallDomain = "https://www.vincall.net";

export const callPanelUrl = `${vincallDomain}/oauth/login`;

export const popperContentUrl = `${vincallDomain}/#/phonedialer`;

export const navBarWidgetId = "vincall-nav-bar";
