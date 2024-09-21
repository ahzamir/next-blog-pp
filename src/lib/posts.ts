import { Post } from "@/models/Post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Next.js Guide",
    content: "All about Next.js...",
    author: "Ahmad Zamir",
  },
  {
    id: 2,
    title: "Typescript for beginners",
    content: "Learn Typescript...",
    author: "Ahmad Zia",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    content: "All about Tailwind CSS...",
    author: "Ahmad Zaki",
  },
  {
    id: 4,
    title: "CSS",
    content: "All about CSS...",
    author: "Ahmad",
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostById(id: number): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function addPost(post: Omit<Post, "id">): Post {
  const newPost = { id: posts.length + 1, ...post };
  posts.push(newPost);
  return newPost;
}
