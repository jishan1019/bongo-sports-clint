import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/AllLayout/ErrorLayout/ErrorPage.jsx";
import Home from "./components/AllLayout/HomeLayout/Home/Home.jsx";
import { HelmetProvider } from "react-helmet-async";
import Login from "./components/AllLayout/LoginRegestationLayout/Login/Login.jsx";
import Regestation from "./components/AllLayout/LoginRegestationLayout/Regestation/Regestation.jsx";
import AuthProvider from "./components/SecurityLayout/AuthProvider/AuthProvider.jsx";
import Classes from "./components/AllLayout/ClassesLayout/Classes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/regestation",
        element: <Regestation />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </HelmetProvider>
  </AuthProvider>
);
