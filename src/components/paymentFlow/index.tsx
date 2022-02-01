import styles from "./styles.module.scss";
import MetamaskSVG from "../../assets/imgs/metamask.svg";
import { Image, Container } from "react-bootstrap";
import Button from "../UI/Button";
import PaymentForm from "../paymentForm/";

const Home = () => {
  return (
    <section id={styles.PaymentFlow}>
      <div className={styles.paySection}>
        <div className={styles.leftSection}>
          <div className={styles.leftButtons}>
            <Container>
              <PaymentForm />
            </Container>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightButtons}>
            <Image src={MetamaskSVG} alt="Connect by Metamask" width={120} />
            <Button>CONNECT METAMASK</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
