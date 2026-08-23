import { BlogArticle } from "@/components/blog/blog-article";
import { BlogDetailTransition } from "@/components/blog/blog-detail-transition";
import { BLOG_POSTS, getBlogPost } from "@/data/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailTransition><BlogArticle post={post} /></BlogDetailTransition>;
}
