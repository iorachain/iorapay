import MetaMask from "../../assets/imgs/metamask.svg";
import { Image, Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import useMetaMaskChecker from "hooks/useMetamaskChecker";
import { useEffect } from "react";
import useMetaMask from "hooks/useMetaMask";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const MetamaskIntegration = () => {
  const { connect, isActive } = useMetaMask();

  useEffect(() => {
    useMetaMaskChecker();
  });

  const MetaMaskButton = () => {
    return (
      <div className={styles.metaMaskButton}>
        <Button variant="contained" size="large" onClick={connect}>
          Connect Metamask
        </Button>
        <div className={styles.metamaskTitle}>Don’t have metamask yet?</div>
        <div className={styles.downloadMetamask}>
          <Button variant="text" size="small">
            Install Metamask
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id={styles.MetamaskIntegration}>
      <Container className={styles.metamaskSection}>
        {isBrowser && (
          <Image width={150} src={MetaMask} alt="Connect Metamask" />
        )}
        {!isActive && <MetaMaskButton />}
      </Container>
    </section>
  );
};

export default MetamaskIntegration;
