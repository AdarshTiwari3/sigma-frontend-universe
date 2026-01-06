import { Routes, Route } from "react-router-dom";
import HooksIndex from "./hooks-index";
import UseStateDemo from "@/topics/hooks/use-state-hook/use-state-demo";

const HooksRoutes = () => {
  return (
    <Routes>
      <Route index element={<HooksIndex />} />
      <Route path="use-state" element={<UseStateDemo />} />
    </Routes>
  );
};

export default HooksRoutes;
