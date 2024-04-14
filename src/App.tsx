import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyFamily from "./app/moi/screen/MyFamily/Page";
import ClinicServices from "./app/moi/screen/ClinicServices/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyFamily />,
  },
  {
    path: "/services",
    element: <ClinicServices />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
