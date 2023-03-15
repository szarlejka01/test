import { useCallback } from "react";
import MainMenuContainer from "./MainMenuContainer";
import { useNavigate } from "react-router-dom";
import styles from "./CVContainer.module.css";

const CVContainer = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/mojecv-ulubione");
  }, [navigate]);

  return (
    <div className={styles.content}>
      <MainMenuContainer />
      <div className={styles.przecznikWszystkie}>
        <button className={styles.button} onClick={onButtonClick}>
          
        </button>
        <div className={styles.aktywne}>
          <div className={styles.div}></div>
        </div>
      </div>
      <div className={styles.gwnaMojecv}>
        <div className={styles.cv1Parent}>
          <div className={styles.cv1} />
          <div className={styles.cv1} />
          <div className={styles.cv1} />
        </div>
        <div className={styles.cv1Parent}>
          <div className={styles.cv1} />
          <div className={styles.cv1} />
          <div className={styles.cv6}>
            <div className={styles.stwrzNoweCv}>{`Stwórz nowe CV `}</div>
            <div className={styles.plus}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVContainer;
