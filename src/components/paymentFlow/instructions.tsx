import styles from "./styles.module.scss";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";

const Instructions = () => {
  return (
    <>
      <Container className={styles.paymentSection}>
        <div className={styles.instructionsSection}>
          <div className="mt-3">
            Você precisa instalar Metamask <br />
            para usar os serviços da IoraWallet
          </div>
          <div className="mt-3">
            <ReactPlayer
              width="460px"
              height="330px"
              url="https://www.youtube.com/watch?v=cSBp71amDZo"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.buttonSection}>
          <Button
            size="large"
            variant="contained"
            target="_blank"
            href="https://metamask.io/download.html"
          >
            Download Metamask
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Instructions;
