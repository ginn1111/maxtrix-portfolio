import { articleBySlug, articles } from "@/data/articles";
import { comparisonBySlug, comparisons } from "@/data/comparisons";
import { siteConfig } from "@/data/site";
import { toolBySlug, tools } from "@/data/tools";

export function getTool(slug: string) {
  return toolBySlug[slug];
}

export function getComparison(slug: string) {
  return comparisonBySlug[slug];
}

export function getArticle(slug: string) {
  return articleBySlug[slug];
}

export function getToolHref(slug: string) {
  return `/tools/${slug}`;
}

export function getComparisonHref(slug: string) {
  return `/compare/${slug}`;
}

export function getArticleHref(slug: string) {
  return `/blog/${slug}`;
}

export function getPrimaryCtaUrl(toolSlug: string) {
  const tool = getTool(toolSlug);
  if (!tool) return "#";
  return tool.affiliateUrl ?? tool.vendorUrl;
}

export function runContentChecks() {
  const toolSlugs = new Set<string>();
  const comparisonSlugs = new Set<string>();
  const articleSlugs = new Set<string>();

  for (const tool of tools) {
    if (toolSlugs.has(tool.slug)) throw new Error(`Duplicate tool slug: ${tool.slug}`);
    toolSlugs.add(tool.slug);
    if (!tool.disclosure) throw new Error(`Missing disclosure for tool: ${tool.slug}`);
  }

  for (const comparison of comparisons) {
    if (comparisonSlugs.has(comparison.slug)) throw new Error(`Duplicate comparison slug: ${comparison.slug}`);
    comparisonSlugs.add(comparison.slug);
    for (const slug of comparison.primaryToolSlugs) {
      if (!toolBySlug[slug]) throw new Error(`Unknown tool in comparison ${comparison.slug}: ${slug}`);
    }
    for (const scenario of comparison.winnerByScenario) {
      if (!toolBySlug[scenario.winnerSlug]) {
        throw new Error(`Unknown winner slug in comparison ${comparison.slug}: ${scenario.winnerSlug}`);
      }
    }
  }

  for (const article of articles) {
    if (articleSlugs.has(article.slug)) throw new Error(`Duplicate article slug: ${article.slug}`);
    articleSlugs.add(article.slug);
    if (article.relatedToolSlugs.length + article.relatedComparisonSlugs.length === 0) {
      throw new Error(`Article missing monetization target: ${article.slug}`);
    }
    for (const slug of article.relatedToolSlugs) {
      if (!toolBySlug[slug]) throw new Error(`Unknown related tool in article ${article.slug}: ${slug}`);
    }
    for (const slug of article.relatedComparisonSlugs) {
      if (!comparisonBySlug[slug]) throw new Error(`Unknown related comparison in article ${article.slug}: ${slug}`);
    }
  }

  for (const source of siteConfig.newsletterSources) {
    if (!source) throw new Error("Newsletter source list invalid");
  }
}

runContentChecks();
