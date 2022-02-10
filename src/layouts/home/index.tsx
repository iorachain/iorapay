import { Outlet } from "react-router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./styles.module.scss";

const Layout = () => {
  return (
    <div id="Layout">
      <Header />
      <section id={styles.Content}>
        <div className={styles.ContentWrap}>
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
