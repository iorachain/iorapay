import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import DiscordIcon from "../../assets/imgs/icons/discord.svg";
import { Image } from "react-bootstrap";

const step3 = () => {
  const DiscordCommunity = (
    <div className={styles.discordButton}>
      <Image height={25} src={DiscordIcon} alt="Enjoy Discord Community" />
      <span>JOIN DISCORD COMMUNITY</span>
    </div>
  );
  return (
    <div className={styles.supportSection}>
      <span>
        If you have any questions you can try our discord channel for support
        contact.
      </span>
      <div className={styles.supportButton}>
        <Button size="large" variant="contained">
          {DiscordCommunity}
        </Button>
      </div>
    </div>
  );
};

export default step3;
