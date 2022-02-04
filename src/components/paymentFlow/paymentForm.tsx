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
import BinanceServices from "../../services/binance.services";
import { Link } from "react-router-dom";
import Instructions from "./instructions";
import useMetaMask from "hooks/useMetaMask";

const PIXPayment = (
  <span className={styles.buttonPix}>
    <Image height={25} color="#59beac" src={PIX} alt="Pay with PIX" />
    PAGAR COM PIX
  </span>
);

async function getPrices(symbol: string) {
  return BinanceServices.get(symbol);
}

const PaymentForm = () => {
  const { isActive } = useMetaMask();
  getPrices("BTCBRL").then((result) => console.log(result));

  return !isActive ? (
    <Instructions />
  ) : (
    <Container>
      <Form id={styles.PaymentForm}>
        <h3 className="mt-3 text-center">COMPRAR CRIPTOS</h3>
        <Form.Group className="mt-3 mb-3" controlId="formCurrency">
          <Form.Label className={styles.labelForm}>MOEDA</Form.Label>
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
              <Dropdown.ItemText>Selecione a criptomoeda</Dropdown.ItemText>
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
        <div className={styles.buttonSection}>
          <Button component={Link} variant="contained" size="large" to="/step2">
            {PIXPayment}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PaymentForm;
