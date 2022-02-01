import styles from "./styles.module.scss";
import Button from "../UI/Button";
import { Image } from "react-bootstrap";
import MetamaskSVG from "../../assets/imgs/metamask.svg";

const step1 = () => {
  return (
    <div className={styles.walletConnect}>
      <Image src={MetamaskSVG} alt="Connect by Metamask" width={120} />
      <Button>CONNECT METAMASK</Button>
    </div>
  );
};

export default step1;
