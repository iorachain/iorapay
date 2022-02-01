import { Outlet } from "react-router";
import Header from "../../components/header";

const Layout = () => {
  return (
    <div id="Layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
