import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer id={styles.Footer}>
      <div>Brasil</div>
      <div className={styles.rightFooter}>
        <span>Privacidade</span>
        <span>Termos</span>
      </div>
    </footer>
  );
};

export default Footer;
