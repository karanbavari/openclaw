---
read_when:
  - 你想选择一个模型提供商
  - 你需要支持的 LLM 后端的快速概览
summary: OpenClaw 支持的模型提供商（LLM）
title: 模型提供商
x-i18n:
  generated_at: "2026-03-16T06:25:28Z"
  model: gpt-5.4
  provider: openai
  source_hash: 1d7ba79fd152a978e6eb3b8f8d5dfc44cebba77d2c74dc3892aae917d32ad2ee
  source_path: providers/index.md
  workflow: 15
---

# 模型提供商

这个 fork 只保留了一组精简后的内置 LLM 提供商。选择一个提供商，完成身份验证，
然后将默认模型设置为 `provider/model`。

在找聊天渠道文档（WhatsApp/Telegram/Discord/Slack/Mattermost（插件）/等）？请参见 [Channels](/channels)。

## 快速开始

1. 使用该提供商进行身份验证（通常通过 `openclaw onboard`）。
2. 设置默认模型：

```json5
{
  agents: { defaults: { model: { primary: "anthropic/claude-opus-4-6" } } },
}
```

## 保留的内置模型提供商

- [Anthropic（API + Claude Code CLI）](/providers/anthropic)
- [GitHub Copilot](/providers/github-copilot)
- [GLM 模型](/providers/glm)
- [Google（Gemini）](/providers/google)
- [Kilocode](/providers/kilocode)
- [MiniMax](/providers/minimax)
- [Moonshot AI（Kimi + Kimi Coding）](/providers/moonshot)
- [OpenAI（API + Codex）](/providers/openai)
- [OpenRouter](/providers/openrouter)
- [Z.AI](/providers/zai)

## 社区工具

- [Claude Max API Proxy](/providers/claude-max-api-proxy) - 面向 Claude 订阅凭证的社区代理（使用前请核实 Anthropic 政策/条款）

上游其它内置提供商在这个 fork 中已被移除；如果配置里继续引用它们，
校验会直接报错。
