import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/homePages";
import GalleryPages from "./pages/galleryPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/image-gallery",
    element: <GalleryPages />,
  },
]);

export default router;
