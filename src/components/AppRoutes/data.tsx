import { AboutPage } from "pages/About";
import { HistoryPage } from "pages/History";
import { HomePage } from "pages/Home";
import { NotFoundPage } from "pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
