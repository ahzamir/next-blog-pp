import { Post } from "@/models/Post";
import { getAllPosts, getPostById, addPost } from "@/lib/posts";

// Fetch all posts (Simulates API call)
export async function fetchPosts(): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getAllPosts());
    }, 1000); // Simulate network delay
  });
}

// Fetch a single post by ID
export async function fetchPost(id: number): Promise<Post | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getPostById(id));
    }, 1000); // Simulate network delay
  });
}

// Add a new post (simulate API call)
export async function createPost(post: Omit<Post, "id">): Promise<Post> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(addPost(post));
    }, 1000); //Simulate network delay
  });
}
