import React from "react";
/* existing imports */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reader from "./containers/reader/reader";
import UrlDetection from "./containers/url-detection/url-detection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Reader />,
  },
  {
    path: "/url",
    element: <UrlDetection />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
