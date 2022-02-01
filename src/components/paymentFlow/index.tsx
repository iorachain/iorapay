import styles from "./styles.module.scss";
import PaymentForm from "../paymentForm/";
import Step1 from "../paymentFlow/step1";
import Step2 from "../paymentFlow/step2";
import Step3RightContainer from "./step3RightContainer";
import Step3LeftContainer from "./step3LeftContainer";

const Home = () => {
  return (
    <section id={styles.PaymentFlow}>
      <div className={styles.paySection}>
        <div className={styles.leftSection}>
          <div className={styles.leftButtons}>
            <PaymentForm />
          </div>
        </div>
        <div className={styles.rightSection}>
          <Step1 />
        </div>
      </div>
    </section>
  );
};

export default Home;
