import {
  Form,
  Container,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import PIX from "../../assets/imgs/icons/pix.svg";
import styles from "./styles.module.scss";

const PaymentForm = () => {
  const PIXPayment = (
    <span>
      <Image color="#59beac" src={PIX} alt="Pay with PIX" />
      PAY WITH PIX
    </span>
  );

  return (
    <Container>
      <Form id={styles.PaymentForm}>
        <h3 className="mt-3">BUY CRYPTOS</h3>
        <Form.Group className="mt-3 mb-3" controlId="formCurrency">
          <Form.Label className={styles.labelForm}>CURRENCY</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputForm}
              placeholder="1"
              aria-label="Total value converted"
              aria-describedby="asset"
            />
            <InputGroup.Text className={styles.labelCurrency} id="asset">
              BTC
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formValue">
          <Form.Label className={styles.labelForm}>VALUE</Form.Label>
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
        <Form.Group className="mt-3 pb-4" controlId="formPIXChecked">
          <Form.Label className={styles.labelForm}>PAYMENT METHOD</Form.Label>
          <Form.Check
            className={styles.inputCheck}
            type="radio"
            label={PIXPayment}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PaymentForm;
