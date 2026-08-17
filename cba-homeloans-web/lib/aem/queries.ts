// Flat names only — AEM's persist API rejects nested paths like "commbank/home-loans/x"
// ("does not denote a Persistent Query Path"), verified against a live instance.
export const PersistedQueries = {
  getSiteChrome: "get-site-chrome",
  getHomeLoansPage: "get-home-loans-page",
  getPageByPath: "get-page-by-path",
  listPages: "list-pages",
} as const;
