import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";

interface ParentCompProps {
  childComp: React.ReactChild;
}

const WhiteBox: React.FC<ParentCompProps> = ({ childComp }) => {
  return (
    <section id={styles.GrayBox}>
      <Container className={styles.GrayBoxSection}>{childComp}</Container>
    </section>
  );
};

export default WhiteBox;
