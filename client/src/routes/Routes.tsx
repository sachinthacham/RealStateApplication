import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Signin from "../pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "sign-in", element: <Signin /> },
    ],
  },
]);

export default router;
