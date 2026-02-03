import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactTopics from "@/pages/react-topics";
// import HooksRoutes from "@/topics/hooks/index/hooks-route";
// import ZustandStore from "@/topics/store/zustand";
// import Course from "@/topics/store/redux-toolkit/features/course";
import { lazy, Suspense } from "react";

// lazy imports
const HooksRoutes = lazy(() => import("@/topics/hooks/index/hooks-route"));
const ZustandStore = lazy(() => import("@/topics/store/zustand"));
const Course = lazy(
  () => import("@/topics/store/redux-toolkit/features/course"),
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>...loading the routes</div>}>
        {/* lazy loading - code splitting */}
        <Routes>
          <Route path="/" element={<ReactTopics />} />
          <Route path="hooks/*" element={<HooksRoutes />} />
          <Route path="zustand-store" element={<ZustandStore />} />
          <Route path="redux-toolkit-store" element={<Course />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
