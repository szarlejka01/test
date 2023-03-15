import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";
import styles from "./MjProfilEdycjaSekcji.module.css";

const MjProfilEdycjaSekcji = () => {
  const navigate = useNavigate();

  const onMojeCV1Click = useCallback(() => {
    navigate("/mojecv-wszystkie");
  }, [navigate]);

  const onCheckClick = useCallback(() => {
    navigate("/mjprofil");
  }, [navigate]);

  return (
    <div className={styles.mjprofilEdycjasekcji}>
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
      <div className={styles.to}>
        <div className={styles.check}>
          <button className={styles.check1} onClick={onCheckClick}>
            check
          </button>
        </div>
        <ProfileMenu onMojeCV1Click={onMojeCV1Click} />
        <div className={styles.sekcje}>
          <div className={styles.sekcjaNierozwinitaDowiad}>
            <div className={styles.dowiadczenieZawodowe}>
              <div className={styles.ikona}></div>
              <div className={styles.dowiadczenieZawodowe1}>
                Doświadczenie zawodowe
              </div>
              <div className={styles.rozwi}>trash</div>
            </div>
          </div>
          <div className={styles.sekcjaNierozwinitaDowiad}>
            <div className={styles.dowiadczenieZawodowe}>
              <div className={styles.ikona1}></div>
              <div className={styles.wyksztacenie1}>Wykształcenie</div>
              <div className={styles.rozwi}>trash</div>
            </div>
          </div>
          <div className={styles.sekcjaNierozwinitaDowiad}>
            <div className={styles.dowiadczenieZawodowe}>
              <div className={styles.ikona1}></div>
              <div className={styles.umiejtnoci1}>Umiejętności</div>
              <div className={styles.rozwi}>trash</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MjProfilEdycjaSekcji;
