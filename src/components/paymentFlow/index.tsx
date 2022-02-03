import styles from "./styles.module.scss";
import PaymentForm from "../paymentForm/";
import Step1 from "../paymentFlow/step1";
import Step2 from "../paymentFlow/step2";
import Step3RightContainer from "./step3RightContainer";
import Step3LeftContainer from "./step3LeftContainer";
import { Row, Col } from "react-bootstrap";
import useMetaMask from "hooks/useMetaMask";
import useMetaMaskChecker from "hooks/useMetamaskChecker";
import { useEffect } from "react";

const Home = () => {
  const { isActive } = useMetaMask();

  useEffect(() => {
    useMetaMaskChecker();
  });

  return (
    <section id={styles.PaymentFlow}>
      <Row className={styles.paySection}>
        <Col className={styles.leftSection} xs={12} md={6}>
          <div className={styles.leftButtons}>
            <PaymentForm />
          </div>
        </Col>
        <Col className={styles.rightSection} xs={12} md={6}>
          {/* {isActive ? <Step2 /> : <Step1 />} */}
          <Step1 />
        </Col>
      </Row>
      <Row>
        <Col>
          <Step2 />
        </Col>
        <Col>
          <Step3LeftContainer />
        </Col>
      </Row>
      <Row>
        <Col>
          <Step3RightContainer />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
