import { Form, Image, InputGroup, FormControl } from "react-bootstrap";
import PIX from "../../assets/imgs/icons/pix.svg";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GrayBox from "../UI/GrayBox";
import GrayButtonArea from "../UI/GrayButtonArea";

const PaymentForm = () => {
  const DataForm = () => {
    return (
      <Form id={styles.PaymentForm}>
        <SwitchOptions />
        <Form.Group className="mb-3" controlId="formCrypto">
          <Form.Label className={styles.labelForm}>MOEDA</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputForm}
              placeholder="1"
              aria-label="1"
              aria-describedby="fiat"
            />
            <InputGroup.Text className={styles.labelCurrency} id="fiat">
              BTC
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formValue">
          <Form.Label className={styles.labelForm}>VALOR</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputForm}
              placeholder="203.462,42"
              aria-label="Total value reais"
              aria-describedby="fiat"
            />
            <InputGroup.Text className={styles.labelCurrency} id="fiat">
              Reais
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPIXChecked">
          <Form.Label className={styles.labelForm}>NETWORK</Form.Label>
          <Form.Select className={styles.inputSelect}>
            <option>Binance Smart Chain</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  };

  const PayButton = () => {
    return (
      <Button
        component={Link}
        variant="contained"
        size="large"
        to="/step2"
        startIcon={<Image height={25} src={PIX} alt="Pay with PIX" />}
      >
        Pagar com PIX
      </Button>
    );
  };

  const SwitchOptions = () => {
    return (
      <div id={styles.SwitchOption}>
        <span className={styles.active}>Comprar</span>
        <span className={styles.inative}>Vender</span>
      </div>
    );
  };

  return (
    <>
      <GrayBox childComp={<DataForm />} />
      <GrayButtonArea childComp={<PayButton />} />
    </>
  );
};

export default PaymentForm;
