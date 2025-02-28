import { Stack } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PropertyAttributes } from "../PropertyAttributes/PropertyAttributes";
import { Dashboard } from "../Dashboard/Dashboard";
import { AttributeSetting } from "../Attribute Setting/AttributeSetting";

// ✅ Create the router object using createBrowserRouter
const router = createBrowserRouter([
  { path: "/", element: <PropertyAttributes /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/attribute-setting", element: <AttributeSetting /> },
]);

const AdminRouter = () => {
  return (
    <Stack>
      {/* ✅ Pass the router object to RouterProvider */}
      <RouterProvider router={router} />
    </Stack>
  );
};

export default AdminRouter;
