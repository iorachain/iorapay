import React, { MouseEvent, useCallback, useEffect } from "react";
import { Form, Image, InputGroup, FormControl } from "react-bootstrap";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GrayBox from "../UI/GrayBox";
import GrayButtonArea from "../UI/GrayButtonArea";

const PaymentForm = () => {
  const DataForm = () => {
    return (
      <Form className="m-4" id={styles.PaymentForm}>
        {/* <SwitchOptions /> */}
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
              BUSD
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
          <Form.Select className={styles.inputSelect} disabled>
            <option>Binance Smart Chain</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  };

  const PayButton = () => {
    return (
      <Button component={Link} variant="contained" size="large" to="/step2">
        Comprar
      </Button>
    );
  };

  const SwitchOptions = () => {
    const leftRef = React.useRef<HTMLDivElement>(null);
    const rightRef = React.useRef<HTMLDivElement>(null);

    const ToogleFunction = (e: MouseEvent) => {
      console.log(e.currentTarget.innerHTML);

      if (e.currentTarget.innerHTML == "Comprar") {
        leftRef.current.className = styles.left__open;
        rightRef.current.className = styles.right;
      } else if (e.currentTarget.innerHTML == "Vender") {
        rightRef.current.className = styles.right__open;
        leftRef.current.className = styles.left;
      }
    };

    return (
      <div id={styles.SwitchOption}>
        <span ref={leftRef} className={styles.left} onClick={ToogleFunction}>
          Comprar
        </span>
        <span ref={rightRef} className={styles.right} onClick={ToogleFunction}>
          Vender
        </span>
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
