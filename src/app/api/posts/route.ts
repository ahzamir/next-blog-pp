import { NextResponse } from "next/server";
import { getAllPosts, addPost } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content, author } = body;
  const newPost = addPost({ title, content, author });
  return NextResponse.json(newPost, { status: 201 });
}
