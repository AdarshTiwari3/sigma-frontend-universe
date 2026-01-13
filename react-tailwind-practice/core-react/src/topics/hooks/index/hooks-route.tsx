import { Routes, Route } from "react-router-dom";
import HooksIndex from "./hooks-index";
import UseStateDemo from "@/topics/hooks/use-state-hook/use-state-demo";
import UseEffectDemo from "@/topics/hooks/use-effect-hook/use-effect-demo";

const HooksRoutes = () => {
  return (
    <Routes>
      <Route index element={<HooksIndex />} />
      <Route path="use-state" element={<UseStateDemo />} />
      <Route path="use-effect" element={<UseEffectDemo />} />
    </Routes>
  );
};

export default HooksRoutes;
