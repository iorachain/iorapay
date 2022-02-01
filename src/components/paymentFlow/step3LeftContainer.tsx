import styles from "./styles.module.scss";
import { Container, Image } from "react-bootstrap";
import WaitingForApproval from "../../assets/imgs/waiting.svg";

export const step3LeftContainer = () => {
  return (
    <Container>
      <Image src={WaitingForApproval} alt="Waiting for approval" />
      <div className={styles.waitingSection}>
        <div className={styles.supportTitle}>
          Your payment is being processed
        </div>
        <div>This can take up to 24 hours </div>
      </div>
    </Container>
  );
};

export default step3LeftContainer;
