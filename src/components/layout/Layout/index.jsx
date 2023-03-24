// Import necessary dependencies
import { Outlet } from "react-router-dom";

// Import components
import Header from "../Header";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}