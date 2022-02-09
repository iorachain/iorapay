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
      <section id={styles.Footer}>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
