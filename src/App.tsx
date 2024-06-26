import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyFamily from "./app/moi/screen/MyFamily/Page";
import ClinicServices from "./app/moi/screen/ClinicServices/Page";
import ClinicReviews from "./app/moi/screen/ClinicReviews/Page";
import ClinicEhealth from "./app/moi/screen/ClinicEhealth/Page";
import ClinicDoctors from "./app/moi/screen/ClinicDoctors/Page";
import EhealthPatients from "./app/moi/screen/Eheath/Patients/Page";

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
  {
    path: "/doctors",
    element: <ClinicDoctors />,
  },
  {
    path: "/ehealth/patients",
    element: <EhealthPatients />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
