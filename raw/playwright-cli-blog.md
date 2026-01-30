---
title: Playwright CLI - Browser Automation for AI Coding Agents
original_source: https://github.com/microsoft/playwright-cli
author:
date: 2025-01-29
---

Browser automation has long been a cornerstone of web testing and scraping, but the tools available to AI coding agents have been limited. Enter **Playwright CLI**—Microsoft's command-line interface designed specifically for agents like Claude Code, optimized for token efficiency and seamless integration with AI workflows.

## What is Playwright CLI?

Playwright CLI is a token-efficient command-line tool for controlling web browsers through simple, agent-friendly commands. Unlike traditional Playwright libraries that require importing schemas and context, Playwright CLI operates through discrete commands that don't bloat the AI model's token budget.

From navigating to URLs and clicking elements to capturing screenshots and handling multiple browser tabs, Playwright CLI provides comprehensive browser control through a minimal, discoverable interface.

## Why Token Efficiency Matters

For AI coding agents, every token counts. Traditional tool schemas can consume hundreds or thousands of tokens just describing what's possible. Playwright CLI sidesteps this by offering:

- **Simple, memorable commands** - No need to load complex API documentation
- **Minimal context overhead** - Each invocation is self-contained
- **Clear command structure** - Predictable patterns like `playwright-cli click e3` or `playwright-cli fill e5 "email@example.com"`

This makes it ideal for agents that need to interact with the web without paying the token tax of verbose tool definitions.

## How We Used It Today

In this session, we attempted to use Playwright CLI to navigate to LinkedIn and extract blog content from your feed:

```bash
playwright-cli open https://www.linkedin.com/feed
```

The goal was to pull interesting articles from your feed and automatically convert them into blog posts for your portfolio. While we ultimately decided this approach had ethical concerns around LinkedIn's Terms of Service and original author rights, the exercise demonstrated the tool's capability to automate interactive tasks that would be tedious or impossible for a human operator to describe to an AI agent.

## Practical Code Examples

Here's what Playwright CLI commands look like in action:

### Basic Navigation and Interaction

```bash
# Open a website
playwright-cli open https://example.com

# Take a snapshot (get element references)
playwright-cli snapshot

# Click an element
playwright-cli click e3

# Fill a form field
playwright-cli fill e5 "user@example.com"
playwright-cli fill e6 "password123"

# Submit the form
playwright-cli press Enter
```

### Form Handling and Data Entry

```bash
# Select a dropdown option
playwright-cli select e9 "option-value"

# Check a checkbox
playwright-cli check e12

# Type text with delays (useful for interactive elements)
playwright-cli type "search query"

# Upload a file
playwright-cli upload ./document.pdf
```

### Navigation and Tab Management

```bash
# Go back/forward
playwright-cli go-back
playwright-cli go-forward

# Create a new tab
playwright-cli tab-new https://example.com/page

# List all tabs
playwright-cli tab-list

# Switch between tabs
playwright-cli tab-select 0
```

### Capture and Debugging

```bash
# Take a screenshot
playwright-cli screenshot

# Export as PDF
playwright-cli pdf

# Check console for errors
playwright-cli console

# Track network requests
playwright-cli network
```

## Future Use Cases

Beyond content scraping, Playwright CLI opens up interesting possibilities:

### 1. **Automated Testing of Your Portfolio**
```bash
# Verify all links work
playwright-cli open https://jimfm.dev
playwright-cli click e3  # Click Projects link
playwright-cli snapshot  # Verify page loaded
```

### 2. **Monitoring and Health Checks**
Periodically verify that external services, APIs, and integrations are functioning correctly by automating user interactions and checking for expected states.

### 3. **Data Collection from APIs with UI**
Extract data from services that don't expose traditional APIs by automating the user interface interactions—useful for services with UI-only access.

### 4. **Testing Interactive Components**
Before deploying new features, automatically test form submissions, multi-step wizards, and complex user flows to catch issues before they reach production.

### 5. **Documentation Screenshots**
Automatically capture updated screenshots of your applications for documentation by automating the steps to reach specific states.

## The Agent-First Advantage

What makes Playwright CLI special isn't just what it does—it's *how* it's designed. Traditional automation tools assume a human operator writing scripts. Playwright CLI assumes an AI agent orchestrating tasks on behalf of a human. This fundamental difference makes it:

- **More discoverable** - Commands are simple and self-explanatory
- **Less wasteful** - No verbose schemas eating into context windows
- **More reliable** - Straightforward commands mean fewer misinterpretations
- **Better integrated** - Works naturally with agent workflows and iterative problem-solving

As AI coding assistants become more sophisticated, tools designed with agents in mind—rather than retrofitted for them—will become increasingly valuable.

## Wrapping Up

Playwright CLI represents a thoughtful approach to tool design for the AI era. While we didn't proceed with the LinkedIn scraping idea due to ethical concerns, the tool's capability to automate complex browser interactions opens real possibilities for testing, monitoring, and data collection workflows.

If you're building tools that AI agents need to interact with your applications, Playwright CLI is worth exploring. And if you're using Claude Code or similar agents for development work, knowing Playwright CLI is available for web automation tasks can significantly enhance your workflow.

---

*Have you used Playwright CLI in your own projects? Share your experiences and creative use cases in the comments below.*
