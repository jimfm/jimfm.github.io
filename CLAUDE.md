# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal GitHub Pages website hosted at https://jimfm.dev. It's a static HTML site with no build tools, frameworks, or complex tooling. The site serves as a portfolio and blog, showcasing projects and articles with a modern, contemporary design.

**Key characteristics:**
- Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- GitHub Pages deployment via GitHub Actions workflow
- Modern responsive design with sidebar layout
- No build process, no dependencies to manage
- Contemporary color palette (purple/blue gradients) with smooth animations

## Site Architecture

The site uses a **template-based architecture** where each page (index.html, blog.html, projects.html, about.html, and individual blog post pages) follows the same structural pattern:

1. **Header section** - Displays the jimfm logo
2. **Navigation bar** - Consistent navbar across all pages with links to main sections (Home, Projects, Blog, About)
3. **Two-column layout** - Left sidebar with menu/resources and main content area
4. **Footer** - Copyright notice

This consistent structure means when adding or modifying pages, maintain the header/navbar/sidebar/footer wrapper pattern. Individual pages only differ in their main content area.

### Page Map

- `index.html` - Home page with featured projects and recent blog posts
- `blog.html` - Blog index listing all blog posts
- `blog-post-*.html` - Individual blog post pages (blog-post-1.html through blog-post-4.html)
- `projects.html` - Projects showcase page
- `about.html` - About/contact information page

All pages link to the same `styles.css` for consistent styling.

## Styling and Layout

The site uses **CSS Flexbox for layout** with a modern aesthetic:
- Navigation bar uses `flex` with hover animations and gradient underlines
- Main container uses `flex` with max-width of 900px
- Responsive breakpoint at 768px converts to vertical layout on mobile
- Cards/boxes use shadows, border-radius, and hover effects for depth

**Color scheme (modern palette):**
- Primary accent: Purple-to-blue gradient (#667eea to #764ba2)
- Header & Footer: Linear gradient backgrounds
- Sidebar: Clean white with colored section headers
- Cards/boxes: White with subtle shadows and colored left borders
- Text: Dark (#1a1a1a) for contrast on light backgrounds
- Links & highlights: Gradient purple (#667eea)

**Modern design features:**
- Smooth transitions and hover animations on all interactive elements
- Box shadows for depth and elevation
- Rounded corners (6-8px) on cards and content boxes
- Clean typography with system font stack
- Pro tip callout boxes with gradient backgrounds

Key CSS classes to know:
- `.project-box` - Card-style containers with left border, hover lift effect
- `.blog-post` - Card-style blog entries with images, hover effects
- `.hero` - Large gradient section for page introductions
- `.project-image` - Fixed-height images for consistency

## Content Management

Since there's no CMS or template engine, content management is **manual HTML editing**:

1. **Adding a new blog post**: Create a new HTML file (e.g., `blog-post-5.html`) following the existing blog-post template structure, then add a link to it in both `blog.html` and `index.html`
2. **Updating the blog index**: Edit `blog.html` to add new entries and remove old ones from featured list
3. **Updating home page**: Edit `index.html` to feature different projects or update the blog post preview list

This manual approach means content changes require editing multiple files to maintain consistency (navigation links, blog index, etc.).

## Deployment

Deployment is handled by GitHub Actions workflow (`.github/workflows/deploy.yml`), which automatically:
1. Deploys to GitHub Pages when changes are pushed to the main branch
2. Builds Jekyll configuration (though site is mostly static HTML)
3. Publishes to the jimfm.dev domain via CNAME file

No local build step is required—just push to main and GitHub Actions handles deployment.

## Development Workflow

Since this is a static site:
- **No build tools** - Edit HTML/CSS directly
- **No local server required for most editing** - Simply open .html files in a browser
- **Testing**: Open modified pages in a browser to verify links and styling
- **Git workflow**: Commit changes and push to trigger automatic deployment

To test locally with links working properly, you can start a simple Python server from the root directory:
```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` to browse the site.

## Common Editing Patterns

1. **Adding a new page**: Copy an existing page template (e.g., `projects.html`), update the content area, then add navigation links to all existing pages
2. **Linking new pages**: Update `#navbar` section in all existing pages plus sidebar `#sidebar` links
3. **Updating styling**: Modify `styles.css` - changes apply globally to all pages
4. **Creating consistent content boxes**: Use `.project-box` or `.blog-post` classes from existing examples

## Important Files

- `styles.css` - All styling; changes here affect all pages
- `_config.yml` - Jekyll configuration (site metadata, plugins)
- `CNAME` - Domain configuration for GitHub Pages (jimfm.dev)
- `.github/workflows/deploy.yml` - Automatic deployment configuration
- `README.md` - User-facing documentation (separate from this developer guide)
- `DOMAIN_SETUP.md` - Notes on domain configuration

## Notes on Git History

The repository has recent commits showing the evolution of the site:
- Latest commits added mock blog posts and created separate pages for projects, blog, and about
- Navigation was made evenly spaced using flexbox
- Previous design iterations are visible in commit history if context is needed
