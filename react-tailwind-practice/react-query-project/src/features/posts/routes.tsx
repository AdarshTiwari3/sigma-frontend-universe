import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const PostsPage = lazy(() => import("@/features/posts/pages/posts-page"));

export const postsRoutes: RouteObject[] = [
  {
    path: "/posts",
    element: <PostsPage />,
  },
  /*
  // Future changes
  {
    path: "/posts/:id",
    element: <PostDetailsPage />,
  },
  {
    path: "/posts/create",
    element: <CreatePostPage />,
  },
  {
    path: "/posts/edit/:id",
    element: <EditPostPage />,
  },
  */
];
