import type { RouteObject } from "react-router-dom";
import { postsRoutes } from "@/features/posts/routes";

export const appRoutes: RouteObject[] = [...postsRoutes];
