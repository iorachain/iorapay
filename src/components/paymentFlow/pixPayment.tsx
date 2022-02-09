import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import QRCODE from "../../assets/imgs/qrcode.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import GrayBox from "../UI/GrayBox";
import GrayButtonArea from "../UI/GrayButtonArea";

const PixPayment = () => {
  const PixContainer = () => {
    return (
      <div id={styles.PaymentForm}>
        <div className="d-flex justify-content-center align-items-center flex-column text-center">
          <Image
            height={"auto"}
            width={200}
            src={QRCODE}
            alt="QR CODE Generated"
          />
          <div className={styles.pixSection}>
            <span>Academia do Planejamento Sistemas LTDA</span>
            <span>
              <b>CNPJ (CHAVE PIX): </b>36.518.505/0001-90
            </span>
          </div>
        </div>
      </div>
    );
  };

  const PaidButton = () => {
    return (
      <Button component={Link} variant="contained" size="large" to="/finish">
        Já realizei o pagamento
      </Button>
    );
  };

  return (
    <>
      <GrayBox childComp={<PixContainer />} />
      <GrayButtonArea childComp={<PaidButton />} />
    </>
  );
};

export default PixPayment;
