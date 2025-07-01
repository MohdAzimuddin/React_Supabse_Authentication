import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
