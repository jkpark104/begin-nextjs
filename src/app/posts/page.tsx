import FilterablePosts from "@/components/FilterablePosts"
import { getAllPosts } from "@/service/posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Posts",
  description: "풀스택 관련 블로그 글",
}

export default async function PostPage() {
  const posts = await getAllPosts()

  const categories = [...new Set(posts.map((post) => post.category))]

  return <FilterablePosts posts={posts} categories={categories} />
}
