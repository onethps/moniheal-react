import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyFamily from "./app/moi/screen/MyFamily/Page";
import ClinicServices from "./app/moi/screen/ClinicServices/Page";
import ClinicReviews from "./app/moi/screen/ClinicReviews/Page";
import ClinicEhealth from "./app/moi/screen/ClinicEhealth/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyFamily />,
  },
  {
    path: "/services",
    element: <ClinicServices />,
  },
  {
    path: "/reviews",
    element: <ClinicReviews />,
  },
  {
    path: "/ehealth",
    element: <ClinicEhealth />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
