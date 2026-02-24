import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/features/posts/api/post-api";
import type { Post, CreatePostRequest } from "@/features/posts/types";

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation<Post, Error, CreatePostRequest>({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}
