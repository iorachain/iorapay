import styles from "./styles.module.scss";
import { Image, Navbar, Nav } from "react-bootstrap";
import { Link as RLink } from "react-scroll";
import IoraWalletLogo from "../../assets/imgs/logo.svg";

const Header = () => {
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
          <RLink
            to="roadmap"
            spy={true}
            smooth={true}
            offset={50}
            duration={600}
            delay={100}
            className={styles.navLink}
            onClick={close}
          >
            <Nav.Item>
              <li className={styles.navItem}>Wallet</li>
            </Nav.Item>
          </RLink>
          <div className="rounded-circle border">
            <Image
              height={40}
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
