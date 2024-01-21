export type ToolbarLinkProps = {
  text: string;
  linkKey: string;
  routeParams?: Record<string, string>;
  queryParams?: Record<string, string>;
  icon?: string | false;
};
