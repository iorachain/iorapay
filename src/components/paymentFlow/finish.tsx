import styles from "./styles.module.scss";
import { Container, Image } from "react-bootstrap";
import WaitingForApproval from "../../assets/imgs/waiting.svg";
import DiscordIcon from "../../assets/imgs/icons/discord.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GrayBox from "../UI/GrayBox";
import GrayButtonArea from "../UI/GrayButtonArea";

export const Finish = () => {
  const DiscordCommunity = (
    <div className={styles.discordButton}>
      <Image height={25} src={DiscordIcon} alt="Enjoy Discord Community" />
      <span>ENTRAR NO DISCORD</span>
    </div>
  );

  const FinishContainer = () => {
    return (
      <div className={styles.finished}>
        <Image src={WaitingForApproval} alt="Waiting for approval" />
        <div className={styles.waitingSection}>
          <div className={styles.supportTitle}>
            Seu pagamento está sendo processado.
          </div>
          <div className={styles.supportSubTitle}>
            Isso pode demorar algumas horas.
          </div>
        </div>
      </div>
    );
  };

  const FinishButton = () => {
    return (
      <div className={styles.buttonSection}>
        <Button
          size="large"
          variant="contained"
          target="_blank"
          href="https://discord.gg/qQaqEERWDd"
        >
          {DiscordCommunity}
        </Button>
      </div>
    );
  };

  return (
    <>
      <GrayBox childComp={<FinishContainer />} />
      <GrayButtonArea childComp={<FinishButton />} />
    </>
  );
};

export default Finish;
