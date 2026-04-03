---
summary: "Supported model providers in this fork"
read_when:
  - You want the provider-by-provider setup surface for this fork
  - You need valid provider ids, example model refs, or onboarding choices
title: "Model Providers"
---

# Model providers

This fork keeps a reduced bundled model-provider set. External model-provider
config must use one of the supported provider ids below. Removed upstream
providers now fail validation instead of silently loading.

## Supported bundled providers

- `anthropic`
- `github-copilot`
- `google`
- `google-gemini-cli`
- `kilocode`
- `kimi`
- `kimi-coding`
- `minimax`
- `minimax-portal`
- `moonshot`
- `openai`
- `openai-codex`
- `openrouter`
- `zai`

## Quick rules

- Model refs still use `provider/model`.
- Example refs:
  - `anthropic/claude-opus-4-6`
  - `openai/gpt-5.4`
  - `openrouter/openai/gpt-5`
  - `github-copilot/gpt-4o`
  - `google/gemini-2.5-pro`
  - `moonshot/kimi-k2`
  - `zai/glm-5`
- Configure auth with `openclaw onboard`, then set the default model with
  `openclaw models set <provider/model>`.

## Onboarding choices kept in this fork

- Anthropic: `setup-token`, `token`, `apiKey`
- OpenAI: `openai-codex`, `openai-api-key`
- OpenRouter: `openrouter-api-key`
- GitHub Copilot: `github-copilot`
- Google: `gemini-api-key`, `google-gemini-cli`
- Kilocode: `kilocode-api-key`
- Moonshot/Kimi Coding: `moonshot-api-key`, `moonshot-api-key-cn`, `kimi-code-api-key`
- MiniMax: `minimax-global-oauth`, `minimax-global-api`, `minimax-cn-oauth`, `minimax-cn-api`
- Z.AI: `zai-api-key`, `zai-coding-global`, `zai-coding-cn`, `zai-global`, `zai-cn`

## Notes

- `kimi` and `kimi-coding` are provided by the bundled Kimi plugin.
- `openai` and `openai-codex` are provided by the bundled OpenAI plugin.
- `google` and `google-gemini-cli` are provided by the bundled Google plugin.
- Removed upstream providers such as Ollama, Mistral, xAI, Model Studio,
  Vercel AI Gateway, Cloudflare AI Gateway, OpenCode, Together, Venice, and
  others are intentionally unsupported in this fork.

See [/providers](/providers) for the supported-provider directory.
