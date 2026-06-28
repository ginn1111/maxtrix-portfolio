import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "app/api/subscribe/route.ts",
  "components/sections/subscribe-section.tsx",
  "components/ui/disclosure-banner.tsx",
  "components/ui/trust-methodology.tsx",
  "lib/analytics.ts",
  "lib/subscribe.ts",
  "lib/site-config.ts",
];

for (const rel of requiredFiles) {
  assert.ok(fs.existsSync(path.join(root, rel)), `Missing required file: ${rel}`);
}

const home = fs.readFileSync(path.join(root, "components/sections/terminal-landing-section.tsx"), "utf8");
assert.match(home, /Subscribe|newsletter|updates/i, "Home page missing subscribe CTA");
assert.match(home, /Disclosure|affiliate/i, "Home page missing disclosure surface");

const projectDetail = fs.readFileSync(path.join(root, "components/sections/project-detail-section.tsx"), "utf8");
assert.match(projectDetail, /trackAffiliateClick/, "Project detail missing CTA analytics wrapper");
assert.match(projectDetail, /DisclosureBanner/, "Project detail missing disclosure banner");
assert.match(projectDetail, /TrustMethodology/, "Project detail missing trust surface");

console.log("launch rails OK");
