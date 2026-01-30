# ⚠️ TEMPLATE - DO NOT PROCESS ⚠️

This file shows the expected structure for blog post source files.
Delete this file once you understand the format, or just ignore it.

---

# Blog Post Template

## Frontmatter (required)

```
---
title: Article Title Goes Here
original_source: https://linkedin.com/feed/update/... (or leave blank if original)
author: Original Author Name (if applicable)
date: Optional - will be auto-generated if omitted
---
```

## Content (markdown format)

Write your article content in markdown. Headers, **bold**, *italics*, lists, etc. all work.

### Images

**Option 1: Hotlink (easiest)**
- Just include the URL in markdown: `![alt text](https://example.com/image.jpg)`
- I'll keep the hotlink as-is

**Option 2: Local image**
- Drop image files in `/raw/images/` (e.g., `/raw/images/my-article-pic.jpg`)
- Reference in markdown as: `![alt text](./images/my-article-pic.jpg)`
- I'll copy to `/img/` and update the reference

## Example

```markdown
---
title: The Future of Web Development
original_source: https://linkedin.com/feed/update/123456
author: Jane Doe
---

Web development is evolving rapidly. Here are my thoughts on what's coming next.

## Key Trends

1. **AI-powered development** - More tools will use AI
2. **Edge computing** - Moving compute closer to users
3. **Better tooling** - Simpler, faster dev experience

![Modern tech stack](./images/tech-stack.jpg)

### The bottom line

The future is bright for web developers who stay curious.
```

---

## Quick Reference

✅ DO:
- Use markdown formatting (# for headers, - for lists, etc.)
- Include the frontmatter at the top
- Make the title descriptive
- Link to original source if inspired by something
- Keep content between 300-1000 words for blog posts

❌ DON'T:
- Include HTML (I'll convert from markdown)
- Worry about styling (that's handled)
- Include the date (I'll use current date or you can specify)
- Include author for your own posts (unless co-authored)
