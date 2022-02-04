import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import QRCODE from "../../assets/imgs/qrcode.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const PixPayment = () => {
  return (
    <>
      <Container className={styles.paymentSection}>
        <div id={styles.PaymentForm}>
          <Image height={180} src={QRCODE} alt="QR CODE Generated" />
          <div className={styles.pixSection}>
            <span>Academia do Planejamento Sistemas LTDA</span>
            <span>
              <b>CNPJ (CHAVE PIX): </b>36.518.505/0001-90
            </span>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.buttonSection}>
          <Button
            component={Link}
            to="/finish"
            variant="contained"
            size="large"
          >
            JÁ REALIZEI O PAGAMENTO
          </Button>
        </div>
      </Container>
    </>
  );
};

export default PixPayment;
