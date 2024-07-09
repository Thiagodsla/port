import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.tsx";
import App from '../App.tsx'


export default createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
]);