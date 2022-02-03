import {
  Form,
  Container,
  Image,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import PIX from "../../assets/imgs/icons/pix.svg";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";

const PaymentForm = () => {
  const PIXPayment = (
    <span className={styles.buttonPix}>
      <Image height={25} color="#59beac" src={PIX} alt="Pay with PIX" />
      PAGAR COM PIX
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
            <DropdownButton
              variant="neutral"
              title="BTC"
              id={styles.asset_select}
              align="end"
              className={styles.labelCurrency}
            >
              <Dropdown.ItemText>Select an asset</Dropdown.ItemText>
              <Dropdown.Item selected href="#">
                BTC
              </Dropdown.Item>
              <Dropdown.Item href="#">ETH</Dropdown.Item>
              <Dropdown.Item href="#">BNB</Dropdown.Item>
              <Dropdown.Item href="#">SOL</Dropdown.Item>
            </DropdownButton>
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
        <div className={styles.buttonSection}>
          <Button variant="contained" size="large">
            {PIXPayment}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PaymentForm;
