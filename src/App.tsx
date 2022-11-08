import React from "react";
/* existing imports */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyCalendar } from "./containers/calendar/calendar";
import Reader from "./containers/reader/reader";
import UrlDetection from "./containers/url-detection/url-detection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyCalendar />,
  },
  {
    path: "/url",
    element: <UrlDetection />,
  },
  {
    path: "/reader",
    element: <Reader />,
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
