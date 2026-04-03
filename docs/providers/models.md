---
summary: "Model providers (LLMs) supported by OpenClaw"
read_when:
  - You want to choose a model provider
  - You want quick setup examples for LLM auth + model selection
title: "Model Provider Quickstart"
---

# Model Providers

This fork keeps a reduced bundled provider set. Pick one, authenticate, then set
the default model as `provider/model`.

## Quick start (two steps)

1. Authenticate with the provider (usually via `openclaw onboard`).
2. Set the default model:

```json5
{
  agents: { defaults: { model: { primary: "anthropic/claude-opus-4-6" } } },
}
```

## Supported providers

- [OpenAI (API + Codex)](/providers/openai)
- [Anthropic (API + Claude Code CLI)](/providers/anthropic)
- [GitHub Copilot](/providers/github-copilot)
- [Google (Gemini)](/providers/google)
- [Kilocode](/providers/kilocode)
- [Moonshot AI (Kimi + Kimi Coding)](/providers/moonshot)
- [MiniMax](/providers/minimax)
- [OpenRouter](/providers/openrouter)
- [Z.AI](/providers/zai)
- [GLM models](/providers/glm)

Removed upstream bundled providers are intentionally unsupported in this fork.
For ids, auth choices, and example refs, see [Model providers](/concepts/model-providers).
