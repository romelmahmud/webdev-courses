import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import {
  AllCourses,
  Blog,
  Checkout,
  Faq,
  Home,
  Login,
  Profile,
  Register,
} from "../../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/courses",
        element: <AllCourses />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
