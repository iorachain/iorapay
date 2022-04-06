import { Form, Image, InputGroup, FormControl } from "react-bootstrap";
import PIX from "../../assets/imgs/icons/pix.svg";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GrayBox from "../UI/GrayBox";
import GrayButtonArea from "../UI/GrayButtonArea";
import useMetaMask from "hooks/useMetaMask";

const PaymentForm = () => {
  const DataForm = () => {
    const { isActive, account } = useMetaMask();

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
          <Form.Label className={styles.labelForm}>MOEDA</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              placeholder="BTC"
              aria-label="BTC"
              aria-describedby="BTC"
              disabled
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formValue">
          <Form.Label className={styles.labelForm}>TOTAL</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              placeholder="R$ 3.200,00"
              aria-label="TOTAL"
              aria-describedby="total"
              disabled
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

export default PaymentForm;
