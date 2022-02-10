import styles from "./styles.module.scss";
import { Col, Row, Image } from "react-bootstrap";
import WhiteBox from "components/UI/WhiteBox";
import BTC from "../../assets/imgs/assets/BTC.svg";
import ETH from "../../assets/imgs/assets/ETH.svg";
import BNB from "../../assets/imgs/assets/BNB.svg";
import ADA from "../../assets/imgs/assets/ADA.svg";
import IOA from "../../assets/imgs/assets/IOA.svg";
import ARK from "../../assets/imgs/assets/ARK.svg";
import MCO from "../../assets/imgs/assets/MCO.svg";
import USDT from "../../assets/imgs/assets/USDT.svg";
import XMR from "../../assets/imgs/assets/XMR.svg";

const SelectAsset = () => {
  const Assets = () => {
    return (
      <section id={styles.SelectAsset}>
        <div className={styles.selectAssetTitle}>Selecione seu ativo</div>
        <div className={styles.selectItems}>
          <Row className={styles.selectItemsSpace}>
            <Col className={styles.assets}>
              <Image src={IOA} width={45} alt="IOA" />
              <span>IOA</span>
            </Col>
            <Col className={styles.assets}>
              <Image src={BTC} width={45} alt="BTC" />
              <span>BTC</span>
            </Col>
            <Col className={styles.assets}>
              <Image src={ETH} width={45} alt="ETH" />
              <span>ETH</span>
            </Col>
          </Row>
          <Row className={styles.selectItemsSpace}>
            <Col className={styles.assets}>
              <Image src={ADA} width={45} alt="ADA" />
              <span>ADA</span>
            </Col>
            <Col className={styles.assets}>
              <Image src={BNB} width={45} alt="BNB" />
              <span>BNB</span>
            </Col>
            <Col className={styles.assets}>
              <Image src={ARK} width={45} alt="ARK" />
              <span>ARK</span>
            </Col>
          </Row>
          <Row className={styles.selectItemsSpace}>
            <Col className={styles.assets}>
              <Image src={MCO} width={45} alt="MCO" />
              <span>MCO</span>
            </Col>
            <Col className={styles.assets}>
              <Image src={USDT} width={45} alt="USDT" />
              <span>USDT</span>
            </Col>
            <Col className={styles.assets}>
              <Image src={XMR} width={45} alt="XMR" />
              <span>XMR</span>
            </Col>
          </Row>
        </div>
      </section>
    );
  };

  return <WhiteBox childComp={<Assets />} />;
};

export default SelectAsset;
