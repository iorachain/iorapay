import styles from "./styles.module.scss";
import { Row, Col } from "react-bootstrap";
import useMetaMaskChecker from "hooks/useMetamaskChecker";
import { useEffect } from "react";
import { Outlet } from "react-router";

const Home = () => {
  useEffect(() => {
    useMetaMaskChecker();
  });

  return (
    <section id={styles.PaymentFlow}>
      <Row className={styles.paySection}>
        <Col className={styles.leftSection} xs={12} md={6}>
          <div className={styles.leftButtons}>
            <Outlet />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
