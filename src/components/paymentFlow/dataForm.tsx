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

    return (
      <Form className="m-4" id={styles.PaymentForm}>
        <Form.Group className="mb-3" controlId="formValue">
          <Form.Label className={styles.labelForm}>EMAIL</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              placeholder="Digite seu email"
              aria-label="Digite seu email"
              aria-describedby="email"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCrypto">
          <Form.Label className={styles.labelForm}>CPF/CNPJ</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputForm}
              placeholder="000.000.000-00"
              aria-label="1"
              aria-describedby="cpf"
            />
            <InputGroup.Text className={styles.labelCurrency} id="cpf">
              CPF
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCrypto">
          <Form.Label className={styles.labelForm}>NOME COMPLETO</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputFormMail}
              placeholder="Digite seu nome completo"
              aria-label="Digite seu nome completo"
              aria-describedby="email"
            />
          </InputGroup>
        </Form.Group>
      </Form>
    );
  };

  const PayButton = () => {
    return (
      <Button component={Link} variant="contained" size="large" to="/step3">
        Confirmar
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
