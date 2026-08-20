import { createBrowserRouter } from "react-router";

import GuestLayout from "@/pages/guest/layout";

import HomePage from "@/pages/guest/home";
import AboutPage from "@/pages/guest/about";
import ContactPage from "@/pages/guest/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
       {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);