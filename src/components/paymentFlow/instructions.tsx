import styles from "./styles.module.scss";
import { Container, Image } from "react-bootstrap";
import NoMetamask from "../../assets/imgs/nometamask.png";
import GrayBox from "../UI/GrayBox";

const Instructions = () => {
  const InstructionSection = () => {
    return (
      <Container className={styles.instructionsSection}>
        <span>
          You need to connect to your Metamask wallet to use iora services
        </span>
        <Image
          width={"100%"}
          src={NoMetamask}
          alt="You don't have metamask installed."
        />
      </Container>
    );
  };

  return (
    <>
      <GrayBox childComp={<InstructionSection />} />
    </>
  );
};

export default Instructions;
