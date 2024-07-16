import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layouts
import Layout from "./layouts/Layout";
import PlanechaseLayout from "./layouts/Planechase";

// Pages
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Planes, { planesLoader } from "./routes/Planes";
import Plane, { planeLoader } from "./routes/Plane";
import PlanechaseGame from "./routes/PlanechaseGame";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} />
      <Route path="planechase" element={<PlanechaseLayout />}>
        <Route index element={<PlanechaseGame />} />
      </Route>
      <Route path="planes">
        <Route index element={<Planes />} loader={planesLoader} />
        <Route path=":slug" element={<Plane />} loader={planeLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
