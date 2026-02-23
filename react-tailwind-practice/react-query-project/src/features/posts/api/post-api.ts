import { apiClient } from "@/lib/api/api-client";
import type { Post } from "@/features/posts/types";

/**
 * Fetch all posts from the posts endpoint.
 */

const POSTS_ENDPOINT = "/posts";

export async function getPosts(): Promise<Post[]> {
  const response = await apiClient.get<Post[]>(POSTS_ENDPOINT);
  return response.data;
}

/**
 * Fetch a single post by ID
 */

export async function getPost(postId: number): Promise<Post> {
  const response = await apiClient.get<Post>(`${POSTS_ENDPOINT}/${postId}`);
  return response.data;
}
