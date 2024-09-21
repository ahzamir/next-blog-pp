import { fetchPost } from "@/services/PostService";

export default async function PostComponent({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetchPost(Number(params.id));

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
      <p className="mt-4 text-gray-500">By {post.author}</p>
    </>
  );
}
