---
read_when:
  - 你想查看这个 fork 支持的模型提供商
  - 你需要有效的 provider id、示例模型引用或 onboarding 选项
summary: 这个 fork 支持的模型提供商
title: 模型提供商
x-i18n:
  generated_at: "2026-04-03T00:00:00Z"
  model: gpt-5.4
  provider: openai
  source_path: concepts/model-providers.md
  workflow: 15
---

# 模型提供商

这个 fork 只保留了一组精简后的内置模型提供商。配置里的外部模型提供商必须使用下面这些受支持的 provider id。上游已经移除的提供商现在会直接触发校验错误。

## 保留的内置提供商

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

## 快速规则

- 模型引用仍然使用 `provider/model`。
- 示例：
  - `anthropic/claude-opus-4-6`
  - `openai/gpt-5.4`
  - `openrouter/openai/gpt-5`
  - `github-copilot/gpt-4o`
  - `google/gemini-2.5-pro`
  - `moonshot/kimi-k2`
  - `zai/glm-5`
- 先用 `openclaw onboard` 完成认证，再用 `openclaw models set <provider/model>` 设置默认模型。

## 这个 fork 保留的 onboarding 选项

- Anthropic：`setup-token`、`token`、`apiKey`
- OpenAI：`openai-codex`、`openai-api-key`
- OpenRouter：`openrouter-api-key`
- GitHub Copilot：`github-copilot`
- Google：`gemini-api-key`、`google-gemini-cli`
- Kilocode：`kilocode-api-key`
- Moonshot / Kimi Coding：`moonshot-api-key`、`moonshot-api-key-cn`、`kimi-code-api-key`
- MiniMax：`minimax-global-oauth`、`minimax-global-api`、`minimax-cn-oauth`、`minimax-cn-api`
- Z.AI：`zai-api-key`、`zai-coding-global`、`zai-coding-cn`、`zai-global`、`zai-cn`

## 说明

- `kimi` 和 `kimi-coding` 由内置 Kimi 插件提供。
- `openai` 和 `openai-codex` 由内置 OpenAI 插件提供。
- `google` 和 `google-gemini-cli` 由内置 Google 插件提供。
- 上游的 Ollama、Mistral、xAI、Model Studio、Vercel AI Gateway、Cloudflare AI Gateway、OpenCode、Together、Venice 等提供商在这个 fork 中都被明确移除了。

目录页见 [/providers](/providers)。
