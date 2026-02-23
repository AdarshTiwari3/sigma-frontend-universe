import type { Post } from "@/features/posts/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold capitalize">{post.title}</h2>
      <p className="text-gray-600 mt-2">{post.body}</p>
      <span className="text-sm text-gray-400">Post ID: {post.id}</span>
    </div>
  );
}
