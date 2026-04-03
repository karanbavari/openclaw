---
summary: "Group chat behavior across WhatsApp and Telegram"
read_when:
  - Changing group chat behavior or mention gating
title: "Groups"
---

# Groups

OpenClaw treats WhatsApp and Telegram groups consistently:

- groups are blocked by default unless allowed
- replies require a mention by default
- direct messages and group chats use separate session routes

## Group policy

Control whether group messages are allowed at all:

```json5
{
  channels: {
    whatsapp: {
      groupPolicy: "allowlist", // open | disabled | allowlist
      groupAllowFrom: ["+15551234567"],
    },
    telegram: {
      groupPolicy: "allowlist",
      groupAllowFrom: ["123456789"],
    },
  },
}
```

| Policy        | Behavior                                                |
| ------------- | ------------------------------------------------------- |
| `"open"`      | Allow groups broadly; mention gating still applies.     |
| `"disabled"`  | Block all group messages.                               |
| `"allowlist"` | Only allowed groups/senders can trigger the assistant.  |

Notes:

- `groupPolicy` is separate from mention gating.
- WhatsApp group sender allowlists usually use E.164 values.
- Telegram group sender allowlists usually use numeric user ids.
- Default is fail-closed: missing allowlists block group-triggered replies.

## Mention gating

By default, group replies require a mention unless you override the group entry:

```json5
{
  channels: {
    whatsapp: {
      groups: {
        "*": { requireMention: true },
        "123@g.us": { requireMention: false },
      },
    },
    telegram: {
      groups: {
        "*": { requireMention: true },
        "-1001234567890": { requireMention: false },
      },
    },
  },
  agents: {
    list: [
      {
        id: "main",
        groupChat: {
          mentionPatterns: ["@openclaw", "openclaw"],
        },
      },
    ],
  },
}
```

Notes:

- Replying to a bot message counts as an implicit mention where the channel supports it.
- `mentionPatterns` are case-insensitive safe regexes used as a fallback when native mentions are unavailable.
- Group history context is pending-only and can be tuned with `messages.groupChat.historyLimit` plus channel-specific overrides.

## Group allowlists

When `channels.whatsapp.groups` or `channels.telegram.groups` is configured, the keys act as the group allowlist.

Common intents:

1. Disable all group replies

```json5
{
  channels: { whatsapp: { groupPolicy: "disabled" } },
}
```

2. Allow only specific WhatsApp groups

```json5
{
  channels: {
    whatsapp: {
      groups: {
        "123@g.us": { requireMention: true },
      },
    },
  },
}
```

3. Allow only specific Telegram groups/topics

```json5
{
  channels: {
    telegram: {
      groups: {
        "-1001234567890": { requireMention: true },
      },
    },
  },
}
```
