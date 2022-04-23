import React, { MouseEvent, useEffect, useState } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GrayBox from "../UI/GrayBox";
import GrayButtonArea from "../UI/GrayButtonArea";
import { connect } from "react-redux";
import { getPrice } from "../../redux/actions/orderActions";
import { OrderData, OrderState } from "./types";
import { toNumber, toString } from "lodash";
import { useForm } from "react-hook-form";

const PaymentForm = ({ getPrice, order }: OrderState) => {
  const { price } = order;
  const [qty, setQty] = useState(1);
  const priceOverFee = toNumber(price);
  const priceTimesQty = priceOverFee * qty;
  const pricePlusFee = (priceTimesQty * 1.052).toFixed(2);
  const priceConvertedToString = toString(pricePlusFee);

  const { register, handleSubmit } = useForm<OrderData>();
  const onSubmit = ({ asset }: OrderData) => {
    const qtyNumbered = toNumber(asset);
    setQty(qtyNumbered);
  };

  useEffect(() => {
    getPrice("USDTBRL", qty);
  }, [qty]);

  const DataForm = () => {
    return (
      <Form
        className="m-4"
        id={styles.PaymentForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SwitchOptions />
        <Form.Group className="mb-3" controlId="formCrypto">
          <Form.Label className={styles.labelForm}>MOEDA</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              autoFocus
              className={styles.inputForm}
              aria-describedby="fiat"
              type="number"
              defaultValue={qty}
              onChange={handleSubmit(onSubmit)}
              onBlurCapture={handleSubmit(onSubmit)}
              onTouchEnd={handleSubmit(onSubmit)}
              {...register("asset")}
            />
            <InputGroup.Text className={styles.labelCurrency} id="fiat">
              USDT
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formValue">
          <Form.Label className={styles.labelForm}>VALOR</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.inputForm}
              placeholder={priceConvertedToString}
              aria-label="Total value reais"
              aria-describedby="fiat"
              type="number"
              readOnly
              {...register("fiat")}
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
      <Button
        component={Link}
        variant="contained"
        size="large"
        type="submit"
        to="/step2"
      >
        Próximo
      </Button>
    );
  };

  const SwitchOptions = () => {
    const leftRef = React.useRef<HTMLDivElement>(null);
    const rightRef = React.useRef<HTMLDivElement>(null);

    const ToogleFunction = (e: MouseEvent) => {
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

const mapStateToProps = (state: OrderState) => ({
  order: state.order,
});

const mapActionsToProps = {
  getPrice,
};

export default connect(mapStateToProps, mapActionsToProps)(PaymentForm);
