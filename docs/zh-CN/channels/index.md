---
read_when:
  - 你想为 OpenClaw 选择一个聊天渠道
  - 你需要快速了解支持的消息平台
summary: 此 OpenClaw 分支支持的消息平台
title: 聊天渠道
x-i18n:
  generated_at: "2026-02-03T07:43:27Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 2632863def6dee97e0fa8b931762f0969174fd4fb22303a00dcd46527fe4a141
  source_path: channels/index.md
  workflow: 15
---

# 聊天渠道

这个分支只保留两个外部消息渠道：WhatsApp 和 Telegram。WebChat 仍然保留为内置浏览器聊天界面。

## 支持的外部渠道

- [Telegram](/channels/telegram) — 通过 grammY 使用 Bot API；支持群组。
- [WhatsApp](/channels/whatsapp) — 最受欢迎；使用 Baileys，需要二维码配对。

## 内置浏览器聊天

- [WebChat](/web/webchat) — 基于 WebSocket 的 Gateway 网关 WebChat 界面。

## 注意事项

- WhatsApp 和 Telegram 可以同时运行；配置一个或两个后，OpenClaw 会按聊天进行路由。
- 最快的设置方式通常是 **Telegram**（简单的机器人令牌）。WhatsApp 需要二维码配对，
  并在磁盘上存储更多状态。
- 群组行为因渠道而异；参见[群组](/channels/groups)。
- 为安全起见，私信配对和允许列表会被强制执行；参见[安全](/gateway/security)。
- 故障排除：[渠道故障排除](/channels/troubleshooting)。
- 模型提供商单独记录；参见[模型提供商](/providers/models)。
