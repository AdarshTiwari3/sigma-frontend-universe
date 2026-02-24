import { useForm } from "react-hook-form";
import { useCreatePost } from "../hooks/use-create-post";
import type { CreatePostRequest } from "../types";
import { useEffect, useState } from "react";

export function CreatePostForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostRequest>();

  const {
    mutate: createPost,
    isPending,
    isSuccess,
    isError,
    error,
    reset: resetMutation,
  } = useCreatePost();

  const [showSuccess, setShowSuccess] = useState(false);

  function onSubmit(data: CreatePostRequest) {
    createPost(data);
  }

  useEffect(() => {
    if (isSuccess) {
      reset();
      setShowSuccess(true);
      resetMutation();
    }
  }, [isSuccess, reset, resetMutation]);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="border rounded-md p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Create Post</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Post title"
          className="w-full border rounded px-3 py-2"
          {...register("title", { required: "Title is required" })}
        />

        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <textarea
          placeholder="Post content"
          className="w-full border rounded px-3 py-2"
          {...register("body", { required: "Body is required" })}
        />

        {errors.body && (
          <p className="text-red-500 text-sm">{errors.body.message}</p>
        )}

        <input
          type="number"
          placeholder="User ID"
          className="w-full border rounded px-3 py-2"
          {...register("userId", {
            required: "User ID is required",
            valueAsNumber: true,
          })}
        />

        {errors.userId && (
          <p className="text-red-500 text-sm">{errors.userId.message}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isPending ? "Creating..." : "Create Post"}
        </button>

        {showSuccess && (
          <p className="text-green-500">Post created successfully!</p>
        )}

        {isError && <p className="text-red-500">Error: {error.message}</p>}
      </form>
    </div>
  );
}
