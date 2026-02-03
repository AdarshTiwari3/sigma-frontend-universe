import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

/* ---------- Normal imports (kept for reference) ---------- */
// import HooksIndex from "./hooks-index";
// import UseStateDemo from "@/topics/hooks/use-state-hook/use-state-demo";
// import UseEffectDemo from "@/topics/hooks/use-effect-hook/use-effect-demo";
// import UseMemoDemo from "@/topics/hooks/use-memo-hook/use-memo-demo";
// import UseCallbackDemo from "@/topics/hooks/use-callback-hook/use-callback-demo";
// import UseContextDemo from "@/topics/hooks/use-context-hook/use-context-demo";
// import UseRefDemo from "@/topics/hooks/use-ref-hook/use-ref-demo";
// import UseReducerDemo from "@/topics/hooks/use-reducer-hook/use-reducer-demo";
// import DisplayWindowSizeBoard from "@/topics/hooks/custom-hook/display-window-board";

/* ---------- Lazy imports (code-split) ---------- */

const HooksIndex = lazy(() => import("./hooks-index"));
const UseStateDemo = lazy(
  () => import("@/topics/hooks/use-state-hook/use-state-demo"),
);
const UseEffectDemo = lazy(
  () => import("@/topics/hooks/use-effect-hook/use-effect-demo"),
);
const UseMemoDemo = lazy(
  () => import("@/topics/hooks/use-memo-hook/use-memo-demo"),
);
const UseCallbackDemo = lazy(
  () => import("@/topics/hooks/use-callback-hook/use-callback-demo"),
);
const UseContextDemo = lazy(
  () => import("@/topics/hooks/use-context-hook/use-context-demo"),
);
const UseRefDemo = lazy(
  () => import("@/topics/hooks/use-ref-hook/use-ref-demo"),
);
const UseReducerDemo = lazy(
  () => import("@/topics/hooks/use-reducer-hook/use-reducer-demo"),
);
const DisplayWindowSizeBoard = lazy(
  () => import("@/topics/hooks/custom-hook/display-window-board"),
);

const HooksRoutes = () => {
  return (
    //  One Suspense boundary for all hook routes
    <Suspense fallback={<div>Loading hook demo...</div>}>
      <Routes>
        <Route index element={<HooksIndex />} />
        <Route path="use-state" element={<UseStateDemo />} />
        <Route path="use-effect" element={<UseEffectDemo />} />
        <Route path="use-memo" element={<UseMemoDemo />} />
        <Route path="use-callback" element={<UseCallbackDemo />} />
        <Route path="use-context" element={<UseContextDemo />} />
        <Route path="use-ref" element={<UseRefDemo />} />
        <Route path="use-reducer" element={<UseReducerDemo />} />
        <Route path="custom-hook" element={<DisplayWindowSizeBoard />} />
      </Routes>
    </Suspense>
  );
};

export default HooksRoutes;
