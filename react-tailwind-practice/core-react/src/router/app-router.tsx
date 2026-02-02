import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactTopics from "@/pages/react-topics";
import HooksRoutes from "@/topics/hooks/index/hooks-route";
import ZustandStore from "@/topics/store/zustand";
import Course from "@/topics/store/redux-toolkit/features/course";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactTopics />} />
        <Route path="hooks/*" element={<HooksRoutes />} />
        <Route path="zustand-store" element={<ZustandStore />} />
        <Route path="redux-toolkit-store" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
