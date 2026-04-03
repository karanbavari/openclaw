---
summary: "CLI reference for `openclaw directory` (self, peers, groups)"
read_when:
  - You want to look up contacts/groups/self ids for a channel
  - You are developing a channel directory adapter
title: "directory"
---

# `openclaw directory`

Directory lookups for channels that support it (contacts/peers, groups, and “me”).

## Common flags

- `--channel <name>`: channel id/alias (required when multiple channels are configured; auto when only one is configured)
- `--account <id>`: account id (default: channel default)
- `--json`: output JSON

## Notes

- `directory` is meant to help you find IDs you can paste into other commands (especially `openclaw message send --target ...`).
- For many channels, results are config-backed (allowlists / configured groups) rather than a live provider directory.
- Default output is `id` (and sometimes `name`) separated by a tab; use `--json` for scripting.

## Using results with `message send`

```bash
openclaw directory peers list --channel telegram --query "alice"
openclaw message send --channel telegram --target @alice --message "hello"
```

## ID formats (by channel)

- WhatsApp: `+15551234567` (DM), `1234567890-1234567890@g.us` (group)
- Telegram: `@username` or numeric chat id; groups are numeric ids

## Self ("me")

```bash
openclaw directory self --channel telegram
```

## Peers (contacts/users)

```bash
openclaw directory peers list --channel telegram
openclaw directory peers list --channel telegram --query "name"
openclaw directory peers list --channel telegram --limit 50
```

## Groups

```bash
openclaw directory groups list --channel whatsapp
openclaw directory groups list --channel whatsapp --query "work"
openclaw directory groups members --channel whatsapp --group-id <id>
```
