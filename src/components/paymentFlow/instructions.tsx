import styles from "./styles.module.scss";
import { Image } from "react-bootstrap";
import MetamaskSVG from "../../assets/imgs/metamask.svg";
import ReactPlayer from "react-player";

const Instructions = () => {
  return (
    <div className={styles.instructionsSection}>
      <Image src={MetamaskSVG} alt="Connect Metamask" width={50} />
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
  );
};

export default Instructions;
