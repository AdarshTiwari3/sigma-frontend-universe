import { usePosts } from "@/features/posts/hooks/use-posts";
import { PostList } from "@/features/posts/components/post-list";

const PostPage = () => {
  const { data, isLoading, isError, error } = usePosts();

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Post Page</h2>
      {isLoading && (
        <div className="flex justify-center py-8">
          <p className="text-gray-500 animate-pulse">Loading posts...</p>
        </div>
      )}

      {isError && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          Error: {error}
        </div>
      )}

      {!isLoading && !isError && data && data.length === 0 && (
        <div className="text-center text-gray-500 py-8">No posts found</div>
      )}

      {!isLoading && !isError && data && data.length > 0 && (
        <PostList posts={data} />
      )}
    </div>
  );
};
export default PostPage;
