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
        <span>
          Você precisa se conectar usando Metamask para usar o Iora Pay
        </span>
        <Image
          width={400}
          src={NoMetamask}
          alt=" Você precisa se conectar usando Metamask para usar o Iora Pay"
        />
        <div className="d-flex justify-content-center mt-3">
          <Button variant="contained" size="large" onClick={connect}>
            Conectar Metamask
          </Button>
        </div>
        <div className={styles.metamaskTitle}>
          Não possui Metamask instalado?
        </div>
        <div className={styles.downloadMetamask}>
          <Button
            variant="text"
            size="small"
            href="https://metamask.io"
            startIcon={<Image height={25} src={MetaMask} alt="Metamask" />}
          >
            Instalar Metamask
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id={styles.MetamaskIntegration}>
      <Container className={styles.metamaskSection}>
        <Row>
          <Col className={styles.dataSection}>
            <div className="mb-4">
              <MetaMaskButton />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MetamaskIntegration;
