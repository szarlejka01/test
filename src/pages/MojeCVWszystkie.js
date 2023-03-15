import CVContainer from "../components/CVContainer";
import styles from "./MojeCVWszystkie.module.css";

const MojeCVWszystkie = () => {
  return (
    <div className={styles.mojecvWszystkie}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.cze}>
            <div className={styles.logo1} />
            <div className={styles.napis}>Cześć, miło Cię widzieć!</div>
          </div>
        </div>
        <div className={styles.menuswitch}>
          <div className={styles.przecznikMotywjasny}>
            <div className={styles.div}>moon</div>
            <div className={styles.aktywne}>
              <div className={styles.div1}>sun</div>
            </div>
          </div>
          <div className={styles.div2}></div>
        </div>
      </div>
      <CVContainer />
    </div>
  );
};

export default MojeCVWszystkie;
