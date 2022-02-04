import styles from "./styles.module.scss";
import { Container, Image } from "react-bootstrap";
import WaitingForApproval from "../../assets/imgs/waiting.svg";
import DiscordIcon from "../../assets/imgs/icons/discord.svg";
import Button from "@mui/material/Button";

export const Finish = () => {
  const DiscordCommunity = (
    <div className={styles.discordButton}>
      <Image height={25} src={DiscordIcon} alt="Enjoy Discord Community" />
      <span>ENTRAR NO DISCORD</span>
    </div>
  );

  return (
    <Container>
      <Image src={WaitingForApproval} alt="Waiting for approval" />
      <div className={styles.waitingSection}>
        <div className={styles.supportTitle}>
          Seu pagamento está sendo processado.
        </div>
        <div className="mb-3">Isso pode demorar algumas horas.</div>
        <Button
          size="large"
          variant="contained"
          target="_blank"
          href="https://discord.gg/qQaqEERWDd"
        >
          {DiscordCommunity}
        </Button>
      </div>
    </Container>
  );
};

export default Finish;
