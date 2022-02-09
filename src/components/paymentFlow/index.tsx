import styles from "./styles.module.scss";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router";
import MetaMaskIntegration from "./metamaskIntegration";
import NoMetaMask from "../paymentFlow/instructions";
import useMetaMask from "hooks/useMetaMask";

const Home = () => {
  const { isActive } = useMetaMask();

  return (
    <section id={styles.PaymentFlow}>
      <Row>
        <Col className={styles.paySection}>
          <div>{isActive ? <Outlet /> : <NoMetaMask />}</div>
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
