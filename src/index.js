import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./component/Menu";
import Error from "./component/Error";
import Body from "./component/Body";
import Contact from "./component/Contact";
import About from "./component/About";
import Cart from "./component/Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restro/:resId",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading the grocery</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
