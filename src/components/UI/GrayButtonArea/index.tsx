import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";

interface ParentCompProps {
  childComp?: React.ReactNode;
}

const GrayButtonArea: React.FC<ParentCompProps> = ({ childComp }) => {
  return (
    <section id={styles.GrayButtonArea}>
      <Container className={styles.buttonSection}>{childComp}</Container>
    </section>
  );
};

export default GrayButtonArea;
