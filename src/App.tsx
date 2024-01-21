import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Page } from "./app/moi/screen/MyFamily/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
