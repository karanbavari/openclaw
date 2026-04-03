---
summary: "Pairing overview: approve who can DM you + which nodes can join"
read_when:
  - Setting up DM access control
  - Pairing a new iOS/Android node
  - Reviewing OpenClaw security posture
title: "Pairing"
---

# Pairing

Pairing is OpenClaw's explicit owner approval step.

It is used for:

1. DM pairing for WhatsApp and Telegram
2. Node pairing for device clients

## DM pairing

When `dmPolicy` is `pairing`, unknown senders get a short code and their message is not processed until you approve it.

### Approve a sender

```bash
openclaw pairing list telegram
openclaw pairing approve telegram <CODE>
```

Supported external channels: `telegram`, `whatsapp`.

### Where state lives

Stored under `~/.openclaw/credentials/`:

- Pending requests: `<channel>-pairing.json`
- Approved allowlist store:
  - Default account: `<channel>-allowFrom.json`
  - Non-default account: `<channel>-<accountId>-allowFrom.json`

## Node pairing

Device pairing is unchanged and still applies to iOS/Android/macOS/headless nodes.

```bash
openclaw devices list
openclaw devices approve <requestId>
openclaw devices reject <requestId>
```

## Related docs

- Telegram: [Telegram](/channels/telegram)
- WhatsApp: [WhatsApp](/channels/whatsapp)
- Security model: [Security](/gateway/security)
