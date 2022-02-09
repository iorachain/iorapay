import styles from "./styles.module.scss";
import { Image, Navbar } from "react-bootstrap";
import IoraWalletLogo from "../../assets/imgs/logo.svg";
import Button from "@mui/material/Button";
import useMetaMask from "hooks/useMetaMask";
import { Link } from "react-router-dom";

const Header = () => {
  const { disconnect, account, isActive } = useMetaMask();
  const shortAddress =
    isActive &&
    account.substring(0, 4) + "..." + account.substring(account.length - 4);

  return (
    <section id={styles.Header}>
      <Navbar className={styles.navbar}>
        <Navbar.Brand>
          <div className={styles.navbarBrand}>
            <Link to="/">
              <Image height={30} src={IoraWalletLogo} alt="Iora logo" />
              <span>
                <b>iora</b>pay
              </span>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse className="d-flex justify-content-end align-items-center pt-2">
          {isActive && (
            <span className={styles.rightOptions}>
              <span>{shortAddress}</span>
              <Button size="small" variant="contained" onClick={disconnect}>
                Disconnect
              </Button>
            </span>
          )}
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
