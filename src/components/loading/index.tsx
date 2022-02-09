import animationData from "./loadingBubbles.json";
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
      <Lottie options={defaultOptions} height={200} width={200} />
    </section>
  );
};

export default Loading;
