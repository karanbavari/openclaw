import { resolveOpenClawAgentDir } from "../agents/agent-paths.js";
import { upsertAuthProfile } from "../agents/auth-profiles.js";
import type { SecretInput } from "../config/types.secrets.js";
import {
  buildApiKeyCredential,
  type ApiKeyStorageOptions,
  writeOAuthCredentials,
  type WriteOAuthCredentialsOptions,
} from "./provider-auth-helpers.js";

const resolveAuthAgentDir = (agentDir?: string) => agentDir ?? resolveOpenClawAgentDir();

type ProviderApiKeySetter = (
  key: SecretInput,
  agentDir?: string,
  options?: ApiKeyStorageOptions,
) => Promise<void> | void;

function upsertProviderApiKeyProfile(params: {
  provider: string;
  key: SecretInput;
  agentDir?: string;
  options?: ApiKeyStorageOptions;
  profileId?: string;
  metadata?: Record<string, string>;
}) {
  upsertAuthProfile({
    profileId: params.profileId ?? `${params.provider}:default`,
    credential: buildApiKeyCredential(params.provider, params.key, params.metadata, params.options),
    agentDir: resolveAuthAgentDir(params.agentDir),
  });
}

function createProviderApiKeySetter(
  provider: string,
  resolveKey: (key: SecretInput) => SecretInput = (key) => key,
): ProviderApiKeySetter {
  return async (key, agentDir, options) => {
    upsertProviderApiKeyProfile({
      provider,
      key: resolveKey(key),
      agentDir,
      options,
    });
  };
}

type ProviderApiKeySetterSpec = {
  provider: string;
  resolveKey?: (key: SecretInput) => SecretInput;
};

function createProviderApiKeySetters<const T extends Record<string, ProviderApiKeySetterSpec>>(
  specs: T,
): { [K in keyof T]: ProviderApiKeySetter } {
  const entries = Object.entries(specs).map(([name, spec]) => [
    name,
    createProviderApiKeySetter(spec.provider, spec.resolveKey),
  ]);
  return Object.fromEntries(entries) as { [K in keyof T]: ProviderApiKeySetter };
}

export {
  buildApiKeyCredential,
  type ApiKeyStorageOptions,
  writeOAuthCredentials,
  type WriteOAuthCredentialsOptions,
};

const {
  setAnthropicApiKey,
  setOpenaiApiKey,
  setGeminiApiKey,
  setMoonshotApiKey,
  setKimiCodingApiKey,
  setZaiApiKey,
  setOpenrouterApiKey,
  setKilocodeApiKey,
} = createProviderApiKeySetters({
  setAnthropicApiKey: { provider: "anthropic" },
  setOpenaiApiKey: { provider: "openai" },
  setGeminiApiKey: { provider: "google" },
  setMoonshotApiKey: { provider: "moonshot" },
  setKimiCodingApiKey: { provider: "kimi" },
  setZaiApiKey: { provider: "zai" },
  setOpenrouterApiKey: {
    provider: "openrouter",
    resolveKey: (key) => (typeof key === "string" && key === "undefined" ? "" : key),
  },
  setKilocodeApiKey: { provider: "kilocode" },
});

export {
  setAnthropicApiKey,
  setOpenaiApiKey,
  setGeminiApiKey,
  setMoonshotApiKey,
  setKimiCodingApiKey,
  setZaiApiKey,
  setOpenrouterApiKey,
  setKilocodeApiKey,
};

export async function setMinimaxApiKey(
  key: SecretInput,
  agentDir?: string,
  profileId: string = "minimax:default",
  options?: ApiKeyStorageOptions,
) {
  const provider = profileId.split(":")[0] ?? "minimax";
  upsertProviderApiKeyProfile({ provider, key, agentDir, options, profileId });
}
