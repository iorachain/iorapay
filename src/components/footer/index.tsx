import styles from "./styles.module.scss";
import { Image } from "react-bootstrap";
import IoraChain from "../../assets/imgs/iorachain.png";

const Footer = () => {
  return (
    <div id={styles.Footer}>
      <div className={styles.leftFooter}>
        <Image height={40} src={IoraChain} alt="Brasil" />
        <span>
          <b>Iora</b>Chain
        </span>
      </div>
      <div className={styles.rightFooter}>
        <span>Privacidade</span>
        <span>Termos</span>
      </div>
    </div>
  );
};

export default Footer;
