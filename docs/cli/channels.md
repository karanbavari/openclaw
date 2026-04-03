---
summary: "CLI reference for `openclaw channels` in the WhatsApp + Telegram fork"
read_when:
  - You want to add/remove WhatsApp or Telegram accounts
  - You want to check channel status or logs
title: "channels"
---

# `openclaw channels`

Manage WhatsApp and Telegram accounts and inspect their runtime status on the Gateway.

## Common commands

```bash
openclaw channels list
openclaw channels status
openclaw channels capabilities
openclaw channels logs --channel all
```

## Add / remove accounts

```bash
openclaw channels add --channel telegram --token <bot-token>
openclaw channels add --channel whatsapp
openclaw channels remove --channel telegram --delete
```

## Login / logout

```bash
openclaw channels login --channel whatsapp
openclaw channels logout --channel whatsapp
```

## Notes

- The interactive add/login flows only support WhatsApp and Telegram in this fork.
- Existing account binding workflows (`openclaw agents bind`, `openclaw agents bindings`) continue to work with these two channels.
- `channels status --probe` remains the fastest transport-level check.
