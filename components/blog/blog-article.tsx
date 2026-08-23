import type { BlogPost } from "@/data/blog";
import { ArticleDetail } from "./article-detail";

export function BlogArticle({ post }: { post: BlogPost }) {
  return <ArticleDetail post={post} />;
}
