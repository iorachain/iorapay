import styles from "./styles.module.scss";
import { ButtonProps } from "./button";

const Button = ({ children }: ButtonProps) => {
  return (
    <div id={styles.Button}>
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export default Button;
