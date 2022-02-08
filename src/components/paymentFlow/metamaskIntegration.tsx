import MetaMask from "../../assets/imgs/metamask.svg";
import { Image, Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import useMetaMaskChecker from "hooks/useMetamaskChecker";
import { useEffect } from "react";
import useMetaMask from "hooks/useMetaMask";

const MetamaskIntegration = () => {
  const { isActive } = useMetaMask();

  useEffect(() => {
    useMetaMaskChecker();
  });

  const MetaMaskButton = () => {
    return (
      <Button
        size="large"
        variant="contained"
        sx={{
          width: 230,
          color: "secondary.main",
          backgroundColor: "primaery.main",
        }}
        target="_blank"
        href="https://metamask.io/download.html"
      >
        Conectar Metamask
      </Button>
    );
  };

  return (
    <section id={styles.MetamaskIntegration}>
      <Container className={styles.metamaskSection}>
        <Image width={150} src={MetaMask} alt="Connect Metamask" />
        {isActive && <MetaMaskButton />}
      </Container>
    </section>
  );
};

export default MetamaskIntegration;
