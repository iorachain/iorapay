import animationData from "./loading.json";
import Lottie from "react-lottie";
import styles from "./style.module.scss";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <section id={styles.Loading}>
      <Lottie options={defaultOptions} width={300} />
    </section>
  );
};

export default Loading;
