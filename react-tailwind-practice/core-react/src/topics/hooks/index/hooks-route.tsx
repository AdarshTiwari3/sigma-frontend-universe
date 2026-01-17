import { Routes, Route } from "react-router-dom";
import HooksIndex from "./hooks-index";
import UseStateDemo from "@/topics/hooks/use-state-hook/use-state-demo";
import UseEffectDemo from "@/topics/hooks/use-effect-hook/use-effect-demo";
import UseMemoDemo from "@/topics/hooks/use-memo-hook/use-memo-demo";
import UseCallbackDemo from "@/topics/hooks/use-callback-hook/use-callback-demo";
import UseContextDemo from "@/topics/hooks/use-context-hook/use-context-demo";
import UseRefDemo from "@/topics/hooks/use-ref-hook/use-ref-demo";
import UseReducerDemo from "@/topics/hooks/use-reducer-hook/use-reducer-demo";
import DisplayWindowSizeBoard from "@/topics/hooks/custom-hook/display-window-board";

const HooksRoutes = () => {
  return (
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
  );
};

export default HooksRoutes;
