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
import Card, { cardLoader } from "./routes/cards/Card";
import Cards, { planesLoader, phenomenonLoader } from "./routes/Cards";
import Planechase from "./routes/games/Planechase";
import BlindEternitiesMap from "./routes/games/BlindEternitiesMap";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} />
      <Route path="games" element={<PlanechaseLayout />}>
        <Route path="planechase" element={<Planechase />} />
        <Route path="blind-eternities-map" element={<BlindEternitiesMap />} />
      </Route>
      <Route path="planes">
        <Route
          index
          element={<Cards title={"Planes"} />}
          loader={planesLoader}
        />
        <Route path=":slug" element={<Card />} loader={cardLoader} />
      </Route>
      <Route path="phenomenons">
        <Route
          index
          element={<Cards title={"Phenomenons"} />}
          loader={phenomenonLoader}
        />
        <Route path=":slug" element={<Card />} loader={cardLoader} />
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
