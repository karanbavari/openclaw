---
summary: "Routing rules for WhatsApp, Telegram, and WebChat"
read_when:
  - Changing channel routing or inbox behavior
title: "Channel Routing"
---

# Channels & routing

OpenClaw routes replies back to the channel where a message came from. In this fork, the supported external channels are WhatsApp and Telegram; `webchat` remains the internal browser chat surface.

## Key terms

- **Channel**: `telegram`, `whatsapp`, or internal `webchat`
- **AccountId**: per-channel account instance when multiple accounts are configured
- **AgentId**: an isolated workspace + session store
- **SessionKey**: the bucket key used for context and concurrency

## Session key shapes

Direct messages collapse to the agent main session:

- `agent:<agentId>:<mainKey>`

Groups remain isolated:

- `agent:<agentId>:<channel>:group:<id>`

Telegram forum topics add `:topic:<topicId>`.

Examples:

- `agent:main:telegram:group:-1001234567890:topic:42`
- `agent:main:whatsapp:group:120363403215116621@g.us`

## Routing rules

Inbound messages choose one agent in this order:

1. Exact peer match
2. Parent peer match
3. Account match
4. Channel match
5. Default agent

Bindings can still target WhatsApp or Telegram peers/accounts explicitly.

## Config example

```json5
{
  agents: {
    list: [{ id: "support", workspace: "~/.openclaw/workspace-support" }],
  },
  bindings: [
    { match: { channel: "telegram", peer: { kind: "group", id: "-100123" } }, agentId: "support" },
    { match: { channel: "whatsapp", peer: { kind: "direct", id: "+15551234567" } }, agentId: "support" },
  ],
}
```

## WebChat behavior

WebChat attaches to the selected agent and defaults to the agent main session. It remains available even if no external channel is configured.
