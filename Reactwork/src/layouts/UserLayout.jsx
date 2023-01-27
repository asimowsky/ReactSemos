import React from "react";
import { Outlet } from "react-router-dom";
const students = [
  { id: 1, name: "stavre" },
  { id: 2, name: "mia" },
  { id: 3, name: "petko" },
  { id: 4, name: "trajko" },
];
export const UserLayout = () => {
  return (
    <div>
      <h1>UsersLayout</h1>
      <Outlet context={students} />
      <footer>FooterComponent</footer>
    </div>
  );
};
