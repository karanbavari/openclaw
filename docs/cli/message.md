---
summary: "CLI reference for `openclaw message` in the WhatsApp + Telegram fork"
read_when:
  - Sending outbound messages or reactions
title: "message"
---

# `openclaw message`

Use `openclaw message` for outbound WhatsApp and Telegram operations.

## Usage

```bash
openclaw message <subcommand> [flags]
```

## Supported channels

- `telegram`
- `whatsapp`

`--channel` is required when both are configured.

## Common target formats

- WhatsApp: E.164 or group JID
- Telegram: chat id, `@username`, or topic-aware group target

## Common actions

- `send`
- `poll`
- `react`

Examples:

```bash
openclaw message send --channel telegram --target @alice --message "Hello"
openclaw message send --channel whatsapp --target +15551234567 --message "Hello"
openclaw message poll --channel telegram --target -1001234567890 --poll-question "Ship?" --poll-option yes --poll-option no
```

Telegram-specific options such as inline buttons and `--thread-id` remain available where supported by the channel config.
