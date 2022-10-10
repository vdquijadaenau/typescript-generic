import { fetch } from "cross-fetch";

type ConfigType<R extends string> = {
  routes: R[];
  fetchers: {
    [K in R]?: () => any;
  };
};

export const configObj: ConfigType<"/" | "/about" | "/contact"> = {
  routes: ["/", "/about", "/contact"],
  /**
   * fetchers is an object where you can optionally
   * pass keys that match the route names.
   *
   * BUT - how do we prevent the user from passing
   * fetchers that don't exist in the routes array?
   */
  fetchers: {
    // @ts-expect-error
    "/does-not-exist": () => {
      return {};
    },
  },
};
