import styles from "./styles.module.scss";
import { Container, Image } from "react-bootstrap";
import NoMetamask from "../../assets/imgs/nometamask.png";
import GrayBox from "../UI/GrayBox";

const Instructions = () => {
  const InstructionSection = () => {
    return (
      <Container className={styles.instructionsSection}>
        <span>
          Você precisa se conectar usando Metamask para usar o Iora Pay
        </span>
        <Image
          width={"100%"}
          src={NoMetamask}
          alt=" Você precisa se conectar usando Metamask para usar o Iora Pay"
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
