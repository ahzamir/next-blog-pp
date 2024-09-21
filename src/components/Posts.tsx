import { fetchPosts } from "@/services/PostService";
import Link from "next/link";
import { Post } from "@/models/Post";

export default async function Posts() {
  const posts: Post[] = await fetchPosts();

  return (
    <>
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      <ul className="mb-4">
        {posts.map((post) => (
          <li key={post.id} className="mt-4">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link
        href={"/posts/new-post"}
        className="p-4 bg-blue-500 text-white rounded mt-5"
      >
        New Post
      </Link>
    </>
  );
}
