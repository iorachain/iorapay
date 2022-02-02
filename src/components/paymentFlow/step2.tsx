import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import QRCODE from "../../assets/imgs/qrcode.png";
import { Image } from "react-bootstrap";

const step2 = () => {
  return (
    <div className={styles.walletConnect}>
      <Image height={180} src={QRCODE} alt="QR CODE Generated" />
      <div className={styles.pixSection}>
        <span>Academia do Planejamento Sistemas LTDA</span>
        <span>
          <b>CNPJ: </b>36.518.505/0001-90
        </span>
      </div>
      <div className="mt-3">
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigator.clipboard.writeText("36518505000190");
          }}
        >
          COPY PIX KEY
        </Button>
      </div>
    </div>
  );
};

export default step2;
