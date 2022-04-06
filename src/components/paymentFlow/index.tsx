import styles from "./styles.module.scss";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router";
import MetaMaskIntegration from "./metamaskIntegration";
import useMetaMask from "hooks/useMetaMask";

const Home = () => {
  const { isActive } = useMetaMask();

  return isActive ? (
    <section id={styles.PaymentFlow}>
      <Row>
        <Col className={styles.paySection}>
          <div>
            <Outlet />
          </div>
        </Col>
      </Row>
    </section>
  ) : (
    <MetaMaskIntegration />
  );
};

export default Home;
