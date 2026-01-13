import { Routes, Route } from "react-router-dom";
import HooksIndex from "./hooks-index";
import UseStateDemo from "@/topics/hooks/use-state-hook/use-state-demo";
import UseEffectDemo from "@/topics/hooks/use-effect-hook/use-effect-demo";
import UseMemoDemo from "@/topics/hooks/use-memo-hook/use-memo-demo";

const HooksRoutes = () => {
  return (
    <Routes>
      <Route index element={<HooksIndex />} />
      <Route path="use-state" element={<UseStateDemo />} />
      <Route path="use-effect" element={<UseEffectDemo />} />
      <Route path="use-memo" element={<UseMemoDemo />} />
    </Routes>
  );
};

export default HooksRoutes;
