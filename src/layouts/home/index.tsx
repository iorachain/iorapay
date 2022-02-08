import { Outlet } from "react-router";
import Header from "../../components/header";
// import Footer from "../../components/footer";

const Layout = () => {
  return (
    <div id="Layout">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
