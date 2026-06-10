import { Outlet } from "react-router";
import NavBar from "./NavBar/NavBar";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;