import type { OpenClawConfig } from "../../config/config.js";
import type { RuntimeWebSearchMetadata } from "../../secrets/runtime-web-tools.types.js";
import type { AnyAgentTool } from "./common.js";
import { SEARCH_CACHE } from "./web-search-provider-common.js";

export function createWebSearchTool(options?: {
  config?: OpenClawConfig;
  sandboxed?: boolean;
  runtimeWebSearch?: RuntimeWebSearchMetadata;
}): AnyAgentTool | null {
  void options;
  return null;
}

export const __testing = {
  SEARCH_CACHE,
  resolveSearchProvider: () => undefined,
};
