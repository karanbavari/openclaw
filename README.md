# OmniClaw SaaS Core

This fork is being reduced from the upstream personal-assistant product into a **web-first CRM and messaging control platform core** for multi-business use.

Current retained direction:
- web admin / control UI
- backend gateway foundation
- WhatsApp and Telegram channel foundations
- retained AI providers aligned to the SaaS roadmap
- CRM-oriented planning artifacts

Removed from the product surface in this fork:
- Docker and Podman packaging
- public CLI launcher packaging
- browser automation and bundled web-search plugins
- voice/audio plugin layer
- legacy shim packages and helper surfaces not aligned to the CRM roadmap

Primary planning document: [BUSINESS_SAAS_PHASE1_RESEARCH_HINGLISH.md](./BUSINESS_SAAS_PHASE1_RESEARCH_HINGLISH.md)

## Product Direction

The target product is a **multi-business digital business manager** with:
- CRM-style customer records
- lead capture and nurturing
- shared messaging inboxes
- appointment and follow-up workflows
- payment and business operations integrations

This repository is currently in cleanup and transition mode. The public terminal-first install/onboarding story from upstream is intentionally being removed.

## Development

Runtime baseline:
- Node 24 recommended
- `pnpm` workspace tooling

Typical local workflow:

```bash
pnpm install
pnpm ui:build
pnpm build
```

## Current Scope

Kept:
- web UI
- gateway/backend code
- retained provider plugins
- retained messaging channel foundations

Being phased out:
- CLI-first onboarding
- container packaging
- personal-assistant specific tooling
- non-CRM product surfaces

## Status

This is an active product pivot. Expect ongoing cleanup of docs, scripts, tests, and runtime surfaces while the codebase is reshaped around the CRM SaaS architecture.
