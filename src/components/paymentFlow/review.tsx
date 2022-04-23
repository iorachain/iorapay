import { Form, Image, InputGroup, FormControl } from "react-bootstrap";
import PIX from "../../assets/imgs/icons/pix.svg";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GrayBox from "../UI/GrayBox";
import GrayButtonArea from "../UI/GrayButtonArea";
import useMetaMask from "hooks/useMetaMask";
import { connect } from "react-redux";
import { OrderState } from "./types";
import { toNumber } from "lodash";

const Review = ({ order }: OrderState) => {
  const { symbol, qty, price } = order;

  const DataForm = () => {
    const { isActive, account } = useMetaMask();
    const total = qty * toNumber(price);
    const totalFixed = "R$ " + total.toFixed(2);

    const shortAddress =
      isActive &&
      account.substring(0, 30) + "..." + account.substring(account.length - 4);

    return (
      <Form className="m-4" id={styles.PaymentForm}>
        <Form.Group controlId="formValue">
          <Form.Label className={styles.labelForm}>EMAIL</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              placeholder="Digite seu email"
              aria-label="Digite seu email"
              aria-describedby="email"
              disabled
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formCrypto">
          <Form.Label className={styles.labelForm}>CPF/CNPJ</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              placeholder="000.000.000-00"
              aria-label="1"
              aria-describedby="cpf"
              disabled
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formValue">
          <Form.Label className={styles.labelForm}>WALLET</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              value={shortAddress}
              aria-label="Wallet"
              aria-describedby="wallet"
              disabled
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formValue">
          <Form.Label className={styles.labelForm}>MÉTODO</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              value={"PIX"}
              aria-label={"PIX"}
              aria-describedby={"PIX"}
              readOnly
              disabled
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formValue">
          <Form.Label className={styles.labelForm}>OPERAÇÃO</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              value={symbol}
              aria-label={symbol}
              aria-describedby={symbol}
              readOnly
              disabled
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formValue">
          <Form.Label className={styles.labelForm}>TOTAL</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              value={totalFixed}
              aria-label="TOTAL"
              aria-describedby="total"
              disabled
              readOnly
            />
          </InputGroup>
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
        to="/step4"
        startIcon={<Image height={25} src={PIX} alt="Pay with PIX" />}
      >
        Pagar com PIX
      </Button>
    );
  };

  return (
    <>
      <GrayBox childComp={<DataForm />} />
      <GrayButtonArea childComp={<PayButton />} />
    </>
  );
};

const mapStateToProps = (state: OrderState) => ({
  order: state.order,
});

export default connect(mapStateToProps, null)(Review);
