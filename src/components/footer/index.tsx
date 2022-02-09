import styles from "./styles.module.scss";
import { Image } from "react-bootstrap";
import BrazilFlag from "../../assets/imgs/icons/brazil.png";

const Footer = () => {
  return (
    <div id={styles.Footer}>
      <div className={styles.leftFooter}>
        <Image height={20} src={BrazilFlag} alt="Brasil" />
        <span>Brasil (Português)</span>
      </div>
      <div className={styles.rightFooter}>
        <span>Privacidade</span>
        <span>Termos</span>
      </div>
    </div>
  );
};

export default Footer;
