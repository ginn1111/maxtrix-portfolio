<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Verification cadence

- Do not run `pnpm run build` repeatedly during implementation.
- Prefer focused checks and `pnpm run lint` while iterating.
- Run `pnpm run build` at commit/final verification time, or when a change specifically affects production build behavior.
<!-- END:nextjs-agent-rules -->
