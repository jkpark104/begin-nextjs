import { getFeaturedPosts } from "@/service/posts"
import PostsGrid from "./PostsGrid"

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts()

  return (
    <section className="my-4">
      <h2 className="my-2 text-2xl font-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}
