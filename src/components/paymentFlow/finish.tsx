import styles from "./styles.module.scss";
import { Image } from "react-bootstrap";
import Done from "../../assets/imgs/done.svg";
import DiscordIcon from "../../assets/imgs/icons/discord.svg";
import Button from "@mui/material/Button";
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
        <Image height={180} src={Done} alt="Waiting for approval" />
        <div className={styles.waitingSection}>
          <div className={styles.supportTitle}>
            SEU PAGAMENTO FOI PROCESSADO
          </div>
          <div className={styles.supportSubTitle}>
            Pode conferir o valor recebido em sua wallet no Metamask
          </div>
        </div>
      </div>
    );
  };

  const FinishButton = () => {
    return (
      <div className="mt-4">
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
