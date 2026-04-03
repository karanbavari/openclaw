---
summary: "Overview of the retained tools and plugin surface in the SaaS-focused fork"
read_when:
  - You want to understand what tools OpenClaw provides
  - You need to configure, allow, or deny tools
  - You are deciding between built-in tools, skills, and plugins
title: "Tools and Plugins"
---

# Tools and Plugins

Everything the agent does beyond generating text happens through **tools**.
Tools are how the agent reads files, runs commands, manages sessions, sends
messages, and performs retained gateway actions.

## Tools, skills, and plugins

OpenClaw has three layers that work together:

<Steps>
  <Step title="Tools are what the agent calls">
    A tool is a typed function the agent can invoke (e.g. `exec`, `message`,
    `sessions_spawn`). OpenClaw ships a set of **built-in tools** and
    plugins can register additional ones.

    The agent sees tools as structured function definitions sent to the model API.

  </Step>

  <Step title="Skills teach the agent when and how">
    A skill is a markdown file (`SKILL.md`) injected into the system prompt.
    Skills give the agent context, constraints, and step-by-step guidance for
    using tools effectively. Skills live in your workspace, in shared folders,
    or ship inside plugins.

    [Skills reference](/tools/skills) | [Creating skills](/tools/creating-skills)

  </Step>

  <Step title="Plugins package everything together">
    A plugin is a package that can register capabilities such as channels,
    model providers, tools, skills, and memory services.
    Some plugins are **core** (shipped with OpenClaw), others are **external**
    (published on npm by the community).

    [Install and configure plugins](/tools/plugin) | [Build your own](/plugins/building-plugins)

  </Step>
</Steps>

## Built-in tools

These tools ship with OpenClaw and are available without installing any plugins:

| Tool                                    | What it does                                             | Page                                    |
| --------------------------------------- | -------------------------------------------------------- | --------------------------------------- |
| `exec` / `process`                      | Run shell commands, manage background processes          | [Exec](/tools/exec)                     |
| `read` / `write` / `edit`               | File I/O in the workspace                                |                                         |
| `apply_patch`                           | Multi-hunk file patches                                  | [Apply Patch](/tools/apply-patch)       |
| `message`                               | Send messages across all channels                        | [Agent Send](/tools/agent-send)         |
| `canvas`                                | Drive node Canvas (present, eval, snapshot)              |                                         |
| `nodes`                                 | Discover and target paired devices                       |                                         |
| `cron` / `gateway`                      | Manage scheduled jobs, restart gateway                   |                                         |
| `image` / `image_generate`              | Analyze or generate images                               |                                         |
| `sessions_*` / `agents_list`            | Session management, sub-agents                           | [Sub-agents](/tools/subagents)          |

For image work, use `image` for analysis and `image_generate` for generation or editing. If you target `openai/*`, `google/*`, `fal/*`, or another non-default image provider, configure that provider's auth/API key first.

### Plugin-provided tools

Plugins can register additional tools where the retained SaaS fork still needs them.
The bundled surface is intentionally narrower than upstream.

## Tool configuration

### Allow and deny lists

Control which tools the agent can call via `tools.allow` / `tools.deny` in
config. Deny always wins over allow.

```json5
{
  tools: {
    allow: ["group:fs", "message"],
    deny: ["exec"],
  },
}
```

### Tool profiles

`tools.profile` sets a base allowlist before `allow`/`deny` is applied.
Per-agent override: `agents.list[].tools.profile`.

| Profile     | What it includes                            |
| ----------- | ------------------------------------------- |
| `full`      | All tools (default)                         |
| `coding`    | File I/O, runtime, sessions, memory, image  |
| `messaging` | Messaging, session list/history/send/status |
| `minimal`   | `session_status` only                       |

### Tool groups

Use `group:*` shorthands in allow/deny lists:

| Group              | Tools                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| `group:runtime`    | exec, bash, process, code_execution                                                                       |
| `group:fs`         | read, write, edit, apply_patch                                                                            |
| `group:sessions`   | sessions_list, sessions_history, sessions_send, sessions_spawn, sessions_yield, subagents, session_status |
| `group:memory`     | memory_search, memory_get                                                                                 |
| `group:ui`         | canvas                                                                                                    |
| `group:automation` | cron, gateway                                                                                             |
| `group:messaging`  | message                                                                                                   |
| `group:nodes`      | nodes                                                                                                     |
| `group:openclaw`   | All built-in OpenClaw tools (excludes plugin tools)                                                       |

### Provider-specific restrictions

Use `tools.byProvider` to restrict tools for specific providers without
changing global defaults:

```json5
{
  tools: {
    profile: "coding",
    byProvider: {
      "google-antigravity": { profile: "minimal" },
    },
  },
}
```
