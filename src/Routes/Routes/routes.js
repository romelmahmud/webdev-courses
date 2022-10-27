import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import {
  AllCourses,
  Blog,
  Checkout,
  CourseDetails,
  Faq,
  Home,
  Login,
  Profile,
  Register,
  Error,
} from "../../pages";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(
            `https://webdev-courses-romelmahmud.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
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
