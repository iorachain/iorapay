import styles from "./styles.module.scss";
import { Image } from "react-bootstrap";
import MetamaskSVG from "../../assets/imgs/metamask.svg";
import useMetaMask from "hooks/useMetaMask";
import Button from "@mui/material/Button";

const step1 = () => {
  const { connect } = useMetaMask();

  return (
    <div className={styles.walletConnect}>
      <Image src={MetamaskSVG} alt="Connect Metamask" width={120} />
      <Button size="large" variant="contained" onClick={connect}>
        CONNECT METAMASK
      </Button>
    </div>
  );
};

export default step1;
