---
status: completed
size: M
scope: hub blog article detail page
owner: ginb
---

# Full Blog Article Detail Design
## Goal

Implement the full article-reading experience for `/hub/blog/[slug]` using the OpenDesign `article.html` structure while preserving the current Matrix portfolio theme, global shell, design tokens, Pragmata Pro Liga font, and existing static blog data.

## Scope

- Keep the existing `/hub/blog/[slug]` route and `notFound()` behavior.
- Keep the existing sidebar, mobile header, footer, and route shell.
- Enrich the current article detail presentation with the OpenDesign reading structure.
- Hardcode enriched content for the current article first; keep the existing section fallback for other posts.
- Do not add MDX, CMS, database storage, external newsletter services, or a broad content-model migration.

## Structure

1. Breadcrumb and article header
   - `ARTICLE` eyebrow
   - title and description
   - published/updated/read-time metadata
   - tags
2. Architecture/pipeline visual using existing Matrix tokens, borders, crosshairs, and scanline utilities.
3. Desktop sticky table of contents and mobile collapsible `ON_THIS_PAGE` control.
4. Article body with headings, paragraphs, inline code, shell/Go code blocks, callouts, a data table, and references.
5. Article footer actions with copy-link feedback and support note.
6. Author card.
7. Previous/next navigation.
8. Related articles.
9. Newsletter presentation with local validation/simulated success only.

## Component direction

- `BlogArticle`: page composition and semantic landmarks.
- `ArticleHeader`: breadcrumb, metadata, tags, title, and excerpt.
- `ArticlePipeline`: architecture visual.
- `ArticleToc`: desktop sticky and mobile collapsible navigation.
- `ArticleBody`: enriched hardcoded article content and fallback section rendering.
- `ArticleFooter`, `ArticleAuthor`, `ArticlePager`, `RelatedArticles`, and `NewsletterPanel`: focused supporting sections.

Existing shared components should be reused where they match the project design system. New components must use token classes rather than introducing a second color system.

## Interaction and accessibility

- Heading anchors update the URL hash.
- TOC highlights the active heading while scrolling.
- Code-copy controls expose visible and assistive-technology feedback.
- All links and controls retain visible focus states and `cursor-pointer` where appropriate.
- External links use safe `target="_blank"` and `rel="noopener noreferrer"` behavior.
- Reduced-motion preferences disable or minimize decorative motion.
- Unknown slugs continue to render the Next.js not-found response.

## Verification

- `pnpm run lint` during implementation.
- `pnpm run build` at commit/final verification time, per `AGENTS.md`.
- Browser verification for desktop and mobile article layouts.
- Verify TOC navigation, active-scroll state, code-copy feedback, newsletter validation, previous/next links, related links, and unknown-slug handling.

## Constraints and tradeoffs

The first implementation intentionally hardcodes one enriched article to match the requested design quickly. A future content-block model can migrate the same structure to MDX or typed local content without changing the route shell or presentation boundaries.
