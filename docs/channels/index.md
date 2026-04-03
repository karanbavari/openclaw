---
summary: "Messaging platforms supported by this OpenClaw fork"
read_when:
  - You want to choose a chat channel for OpenClaw
  - You need a quick overview of supported messaging platforms
title: "Chat Channels"
---

# Chat Channels

This fork supports only two external messaging channels through the Gateway:
WhatsApp and Telegram. WebChat remains available as the built-in web admin chat
surface.

## Supported external channels

- [Telegram](/channels/telegram) — Bot API via grammY; supports groups.
- [WhatsApp](/channels/whatsapp) — Most popular; uses Baileys and requires QR pairing.

## Built-in web chat

- [WebChat](/web/webchat) — Gateway WebChat UI over WebSocket.

## Notes

- WhatsApp and Telegram can run simultaneously; configure one or both and OpenClaw will route per chat.
- Fastest setup is usually **Telegram** (simple bot token). WhatsApp requires QR pairing and
  stores more state on disk.
- Group behavior varies by channel; see [Groups](/channels/groups).
- DM pairing and allowlists are enforced for safety; see [Security](/gateway/security).
- Troubleshooting: [Channel troubleshooting](/channels/troubleshooting).
- Model providers are documented separately; see [Model Providers](/providers/models).
