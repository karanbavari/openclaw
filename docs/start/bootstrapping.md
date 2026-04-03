---
summary: "Agent workspace bootstrapping for the retained gateway runtime"
read_when:
  - Understanding what happens on the first agent run
  - Explaining where bootstrapping files live
  - Debugging initial workspace seeding in the retained runtime
title: "Agent Bootstrapping"
sidebarTitle: "Bootstrapping"
---

# Agent Bootstrapping

Bootstrapping is the **first-run** workspace ritual that prepares an agent workspace
and seeds identity/reference files for the retained gateway runtime.

## What bootstrapping does

On the first agent run, OpenClaw bootstraps the workspace (default
`~/.openclaw/workspace`):

- Seeds `AGENTS.md`, `BOOTSTRAP.md`, `IDENTITY.md`, `USER.md`.
- Runs a short Q&A ritual (one question at a time).
- Writes identity + preferences to `IDENTITY.md`, `USER.md`, `SOUL.md`.
- Removes `BOOTSTRAP.md` when finished so it only runs once.

## Where it runs

Bootstrapping always runs on the **gateway host**. In this SaaS-oriented fork,
the browser control surface remains the primary entry point while the workspace
files stay on the backend host.

<Note>
When the Gateway runs on another machine, edit workspace files on the gateway
host (for example, `user@gateway-host:~/.openclaw/workspace`).
</Note>

## Related docs

- Web control surface: [Control UI](/web/control-ui)
- Workspace layout: [Agent workspace](/concepts/agent-workspace)
