---
summary: "Fast channel troubleshooting for WhatsApp and Telegram"
read_when:
  - Channel transport says connected but replies fail
  - You need channel-specific checks before deeper debugging
title: "Channel Troubleshooting"
---

# Channel troubleshooting

Use this page when the gateway is running but WhatsApp or Telegram behavior is wrong.

## Command ladder

Run these first:

```bash
openclaw status
openclaw gateway status
openclaw logs --follow
openclaw doctor
openclaw channels status --probe
```

Healthy baseline:

- `Runtime: running`
- `RPC probe: ok`
- Channel probe shows connected/ready

## WhatsApp

| Symptom                         | Fastest check                            | Fix                                                     |
| ------------------------------- | ---------------------------------------- | ------------------------------------------------------- |
| Connected but no DM replies     | `openclaw pairing list whatsapp`         | Approve sender or switch DM policy/allowlist.           |
| Group messages ignored          | Check `requireMention` + mention patterns | Mention the bot or relax mention policy for that group. |
| Random disconnect/relogin loops | `openclaw channels status --probe` + logs | Re-login and verify credentials directory is healthy.   |

Full troubleshooting: [/channels/whatsapp#troubleshooting](/channels/whatsapp#troubleshooting)

## Telegram

| Symptom                             | Fastest check                        | Fix                                                                       |
| ----------------------------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| `/start` but no usable reply flow   | `openclaw pairing list telegram`     | Approve pairing or change DM policy.                                      |
| Bot online but group stays silent   | Verify mention requirement + privacy mode | Disable privacy mode for group visibility or mention the bot.       |
| Send failures with network errors   | Inspect logs for Telegram API failures | Fix DNS/IPv6/proxy routing to `api.telegram.org`.                      |
| Native menu registration rejected   | Inspect startup logs                 | Reduce Telegram native commands or disable native menus.                  |
| Allowlist blocks expected messages  | `openclaw security audit`            | Fix DM/group allowlists or migrate old username-based entries to ids.     |

Full troubleshooting: [/channels/telegram#troubleshooting](/channels/telegram#troubleshooting)
