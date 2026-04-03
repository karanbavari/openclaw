---
summary: "CLI reference for `openclaw pairing`"
read_when:
  - You're using pairing-mode DMs and need to approve senders
title: "pairing"
---

# `openclaw pairing`

Approve or inspect DM pairing requests for WhatsApp and Telegram.

## Commands

```bash
openclaw pairing list telegram
openclaw pairing list --channel telegram --account work
openclaw pairing list whatsapp --json

openclaw pairing approve telegram <code>
openclaw pairing approve --channel whatsapp <code> --notify
```

## Notes

- Channel input can be positional or passed with `--channel`.
- `pairing list` supports `--account <accountId>` for multi-account setups.
- `pairing approve` supports `--account <accountId>` and `--notify`.
- If only one pairing-capable channel is configured, `pairing approve <code>` is allowed.
