import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactTopics from "@/pages/react-topics";
import HooksRoutes from "@/topics/hooks/index/hooks-route";
import ZustandStore from "@/topics/store/zustand";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactTopics />} />
        <Route path="hooks/*" element={<HooksRoutes />} />
        <Route path="zustand-store" element={<ZustandStore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
