import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import QRCODE from "../../assets/imgs/qrcode.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const PixPayment = () => {
  return (
    <div className={styles.instructionsSection}>
      <Image height={180} src={QRCODE} alt="QR CODE Generated" />
      <div className={styles.pixSection}>
        <span>Academia do Planejamento Sistemas LTDA</span>
        <span>
          <b>CNPJ (CHAVE PIX): </b>36.518.505/0001-90
        </span>
      </div>
      <div className="mt-3">
        <Button component={Link} to="/finish" variant="contained" size="large">
          JÁ REALIZEI O PAGAMENTO
        </Button>
      </div>
    </div>
  );
};

export default PixPayment;
