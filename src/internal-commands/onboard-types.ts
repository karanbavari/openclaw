import type { ChannelId } from "../channels/plugins/types.js";
import type { SecretInputMode } from "../plugins/provider-auth-types.js";
import type { GatewayDaemonRuntime } from "./daemon-runtime.js";

export type OnboardMode = "local" | "remote";
export type BuiltInAuthChoice =
  // Legacy alias for `setup-token` (kept for backwards CLI compatibility).
  | "oauth"
  | "setup-token"
  | "token"
  | "openai-codex"
  | "openai-api-key"
  | "openrouter-api-key"
  | "kilocode-api-key"
  | "moonshot-api-key"
  | "moonshot-api-key-cn"
  | "kimi-code-api-key"
  | "apiKey"
  | "gemini-api-key"
  | "google-gemini-cli"
  | "zai-api-key"
  | "zai-coding-global"
  | "zai-coding-cn"
  | "zai-global"
  | "zai-cn"
  | "minimax-global-oauth"
  | "minimax-global-api"
  | "minimax-cn-oauth"
  | "minimax-cn-api"
  | "github-copilot"
  | "custom-api-key"
  | "skip";
export type AuthChoice = BuiltInAuthChoice | (string & {});

export type BuiltInAuthChoiceGroupId =
  | "openai"
  | "anthropic"
  | "google"
  | "copilot"
  | "openrouter"
  | "kilocode"
  | "moonshot"
  | "zai"
  | "minimax"
  | "custom";
export type AuthChoiceGroupId = BuiltInAuthChoiceGroupId | (string & {});
export type GatewayAuthChoice = "token" | "password";
export type ResetScope = "config" | "config+creds+sessions" | "full";
export type GatewayBind = "loopback" | "lan" | "auto" | "custom" | "tailnet";
export type TailscaleMode = "off" | "serve" | "funnel";
export type NodeManagerChoice = "npm" | "pnpm" | "bun";
export type ChannelChoice = ChannelId;
// Legacy alias (pre-rename).
export type ProviderChoice = ChannelChoice;
export type { SecretInputMode } from "../plugins/provider-auth-types.js";

export type OnboardOptions = {
  mode?: OnboardMode;
  /** "manual" is an alias for "advanced". */
  flow?: "quickstart" | "advanced" | "manual";
  workspace?: string;
  nonInteractive?: boolean;
  /** Required for non-interactive setup; skips the interactive risk prompt when true. */
  acceptRisk?: boolean;
  reset?: boolean;
  resetScope?: ResetScope;
  authChoice?: AuthChoice;
  /** Used when `authChoice=token` in non-interactive mode. */
  tokenProvider?: string;
  /** Used when `authChoice=token` in non-interactive mode. */
  token?: string;
  /** Used when `authChoice=token` in non-interactive mode. */
  tokenProfileId?: string;
  /** Used when `authChoice=token` in non-interactive mode. */
  tokenExpiresIn?: string;
  /** API key persistence mode for setup flows (default: plaintext). */
  secretInputMode?: SecretInputMode;
  anthropicApiKey?: string;
  openaiApiKey?: string;
  openrouterApiKey?: string;
  kilocodeApiKey?: string;
  moonshotApiKey?: string;
  kimiCodeApiKey?: string;
  geminiApiKey?: string;
  zaiApiKey?: string;
  minimaxApiKey?: string;
  customBaseUrl?: string;
  customApiKey?: string;
  customModelId?: string;
  customProviderId?: string;
  customCompatibility?: "openai" | "anthropic";
  gatewayPort?: number;
  gatewayBind?: GatewayBind;
  gatewayAuth?: GatewayAuthChoice;
  gatewayToken?: string;
  gatewayTokenRefEnv?: string;
  gatewayPassword?: string;
  tailscale?: TailscaleMode;
  tailscaleResetOnExit?: boolean;
  installDaemon?: boolean;
  daemonRuntime?: GatewayDaemonRuntime;
  skipChannels?: boolean;
  /** @deprecated Legacy alias for `skipChannels`. */
  skipProviders?: boolean;
  skipSkills?: boolean;
  skipSearch?: boolean;
  skipHealth?: boolean;
  skipUi?: boolean;
  nodeManager?: NodeManagerChoice;
  remoteUrl?: string;
  remoteToken?: string;
  json?: boolean;
};
