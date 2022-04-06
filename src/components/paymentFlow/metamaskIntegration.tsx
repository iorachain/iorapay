import MetaMask from "../../assets/imgs/metamask.svg";
import { Image, Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import useMetaMaskChecker from "hooks/useMetamaskChecker";
import { useEffect } from "react";
import useMetaMask from "hooks/useMetaMask";
import { isBrowser } from "react-device-detect";
import NoMetamask from "../../assets/imgs/nometamask.png";
import GrayBox from "../UI/GrayBox";

const MetamaskIntegration = () => {
  const { connect } = useMetaMask();

  useEffect(() => {
    useMetaMaskChecker();
  });

  const MetaMaskButton = () => {
    return (
      <div className={styles.metaMaskButton}>
        <Container className={styles.metamaskSection}>
          {isBrowser && (
            <Image width={150} src={MetaMask} alt="Connect Metamask" />
          )}
        </Container>
        <Button variant="contained" size="large" onClick={connect}>
          Conectar Metamask
        </Button>
        <div className={styles.metamaskTitle}>
          Não possui Metamask instalado?
        </div>
        <div className={styles.downloadMetamask}>
          <Button variant="text" size="small">
            Instalar Metamask
          </Button>
        </div>
      </div>
    );
  };

  const Instructions = () => {
    const InstructionSection = () => {
      return (
        <Container className={styles.instructionsSection}>
          <span>
            Você precisa se conectar usando Metamask para usar o Iora Pay
          </span>
          <Image
            width={"100%"}
            src={NoMetamask}
            alt=" Você precisa se conectar usando Metamask para usar o Iora Pay"
          />
        </Container>
      );
    };

    return <GrayBox childComp={<InstructionSection />} />;
  };

  return (
    <section id={styles.MetamaskIntegration}>
      <Container className={styles.metamaskSection}>
        <Row>
          <Col className={styles.paySection}>
            <div>
              <MetaMaskButton />
            </div>
          </Col>
          <Col className={styles.dataSection}>
            <div>
              <div>
                <Instructions />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MetamaskIntegration;
