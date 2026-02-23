import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "@/features/posts/api/post-api";
import type { Post } from "@/features/posts/types";

/**
 * Fetch all posts
 */

export function usePosts() {
  return useQuery<Post[], Error>({
    queryKey: ["posts"], // It is a unique identifier
    queryFn: getPosts,
  });
}

/**
 * Fetch single post by ID
 */

export function usePost(postId: number) {
  return useQuery<Post, Error>({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
    enabled: !!postId, // prevents running if postId is undefined/null
    // staleTime: 0,
    // gcTime: 0,
  });
}
