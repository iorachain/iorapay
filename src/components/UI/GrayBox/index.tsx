import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";

interface ParentCompProps {
  childComp: React.ReactChild;
}

const GrayBox: React.FC<ParentCompProps> = ({ childComp }) => {
  return (
    <section id={styles.GrayBox}>
      <Container className={styles.paymentSection}>{childComp}</Container>
    </section>
  );
};

export default GrayBox;
