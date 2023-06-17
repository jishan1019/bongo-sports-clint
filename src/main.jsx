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
import Instractor from "./components/AllLayout/InstractorLayout/Instactor/Instractor.jsx";
import DashboardHome from "./components/DashboardLayout/DashboardHome/DashboardHome.jsx";
import PrivateRoute from "./components/SecurityLayout/PrivateRoute/PrivateRoute.jsx";
import DashboardRole from "./components/DashboardLayout/DashboardHome/DashboardRole/DashboardRole.jsx";
import MyEnrollClass from "./components/DashboardLayout/SudentDashboard/MyEnrollClass/MyEnrollClass.jsx";
import MySelectClass from "./components/DashboardLayout/SudentDashboard/MySelectClass/MySelectClass.jsx";
import PaymentHistory from "./components/DashboardLayout/SudentDashboard/PaymentHistory/PaymentHistory.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import AddClass from "./components/DashboardLayout/InstractorDashboard/InstractorHome/AddClass/AddClass.jsx";
import MyAddClass from "./components/DashboardLayout/InstractorDashboard/MyAddClass/MyAddClass.jsx";

const queryClient = new QueryClient();

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
      {
        path: "/instractor",
        element: <Instractor />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardHome />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <DashboardRole />,
      },
      {
        path: "my_enroll_calss",
        element: <MyEnrollClass />,
      },
      {
        path: "my_select_calss",
        element: <MySelectClass />,
      },
      {
        path: "my_select_calss",
        element: <MySelectClass />,
      },
      {
        path: "payment_history",
        element: <PaymentHistory />,
      },
      {
        path: "add_class",
        element: <AddClass />,
      },
      {
        path: "my_add_class",
        element: <MyAddClass />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
);
