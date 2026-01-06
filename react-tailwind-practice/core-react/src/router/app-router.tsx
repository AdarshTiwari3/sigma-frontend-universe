import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactTopics from "@/pages/react-topics";
import HooksRoutes from "@/topics/hooks/index/hooks-route";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactTopics />} />
        <Route path="hooks/*" element={<HooksRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
