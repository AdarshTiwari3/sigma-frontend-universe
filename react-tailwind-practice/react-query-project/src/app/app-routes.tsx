import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { appRoutes } from "@/app/routes-config";
function AppRoutesContent() {
  // future feature routes go here
  const routes = useRoutes(appRoutes);

  return (
    <Suspense fallback={<div className="p-4 text-center">Loading page...</div>}>
      {routes}
    </Suspense>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AppRoutesContent />
    </BrowserRouter>
  );
}
