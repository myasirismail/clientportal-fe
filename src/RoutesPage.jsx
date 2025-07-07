import React from "react";
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from "react-router-dom";
import HeaderSideBar from "./Pages/LayoutPage/HeaderSideBar";
import Dashboard from "./Pages/Dashboard";
import OnFirst from "./Pages";
import MyStuff from "./Pages/MyStuff";
import InformationRequests from "./Pages/InformationRequests";
import CreateTask from "./Pages/CreateTask";
import WorkspaceDetailPage from "./Pages/WorkspaceDetailPage";
import Settings from "./Pages/Settings";
import Workspaces from "./Pages/Workspaces";
import WorkspaceDetails from "./Pages/Workspaces/WorkspaceDetails";
import SignupPage from "./Pages/Signup/SignupPage";
import PDFDetails from "./Pages/PDFDetails";

const RoutesPage = () => {
  const Wrapper = () => {
    return (
      <HeaderSideBar>
        <Outlet />
      </HeaderSideBar>
    );
  };

  const routes = [
    // {
    //   path: "/",
    //   element: <Navigate to="/signup" replace />,
    // },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/",
      element: <Wrapper />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "user-dashboard",
          element: <MyStuff />,
        },
        {
          path: "information-requests",
          element: <InformationRequests />,
        },
        {
          path: "create-task",
          element: <CreateTask />,
        },
        {
          path: "workspaces",
          element: <Workspaces />,
        },
        {
          path: "workspaces/:workspaceId",
          element: <WorkspaceDetails />,
        },
        {
          path: "workspace-detail",
          element: <WorkspaceDetailPage />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "pdf-details/:id",
          element: <PDFDetails />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/signup" replace />,
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default RoutesPage;
