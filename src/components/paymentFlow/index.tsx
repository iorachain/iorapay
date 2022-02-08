import styles from "./styles.module.scss";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router";
import MetaMaskIntegration from "./metamaskIntegration";

const Home = () => {
  return (
    <section id={styles.PaymentFlow}>
      <Row>
        <Col className={styles.paySection}>
          <div>
            <Outlet />
          </div>
        </Col>
        <Col className={styles.dataSection}>
          <div>
            <MetaMaskIntegration />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
