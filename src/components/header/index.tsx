import styles from "./styles.module.scss";
import { Image, Navbar } from "react-bootstrap";
import IoraWalletLogo from "../../assets/imgs/logo.svg";
import Button from "@mui/material/Button";
import useMetaMask from "hooks/useMetaMask";

const Header = () => {
  const { connect, account, isActive } = useMetaMask();
  const shortAddress =
    isActive &&
    account.substring(0, 4) + "..." + account.substring(account.length - 4);

  return (
    <section id={styles.Header}>
      <Navbar className={styles.navbar}>
        <Navbar.Brand href="#home">
          <div className={styles.navbarBrand}>
            <Image height={25} src={IoraWalletLogo} alt="" />{" "}
            <span>
              <b>iora</b>wallet
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse className="d-flex justify-content-end align-items-center pt-2">
          {isActive ? (
            <span>
              <b>Wallet: </b>
              {shortAddress}
            </span>
          ) : (
            <Button size="small" variant="contained" onClick={connect}>
              Connect Metamask
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
