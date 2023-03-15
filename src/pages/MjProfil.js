import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";
import styles from "./MjProfil.module.css";

const MjProfil = () => {
  const navigate = useNavigate();

  const onMojeCV1Click = useCallback(() => {
    navigate("/mojecv-wszystkie");
  }, [navigate]);

  const onEditClick = useCallback(() => {
    navigate("/mjprofil-edycjasekcji");
  }, [navigate]);

  return (
    <div className={styles.mjprofil}>
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
        <div className={styles.edit}>
          <button className={styles.edit1} onClick={onEditClick}>
            edit
          </button>
        </div>
        <ProfileMenu onMojeCV1Click={onMojeCV1Click} />
        <div className={styles.sekcje}>
          <div className={styles.sekcjaNierozwinitaDowiad}>
            <div className={styles.doswiadczenie}>
              <div className={styles.ikona}></div>
              <div className={styles.dowiadczenieZawodowe}>
                Doświadczenie zawodowe
              </div>
              <div className={styles.rozwi}></div>
            </div>
          </div>
          <div className={styles.sekcjaNierozwinitaDowiad}>
            <div className={styles.doswiadczenie}>
              <div className={styles.ikona1}></div>
              <div className={styles.wyksztacenie1}>Wykształcenie</div>
              <div className={styles.rozwi1}></div>
            </div>
          </div>
          <div className={styles.sekcjaNierozwinitaDowiad}>
            <div className={styles.doswiadczenie}>
              <div className={styles.ikona1}></div>
              <div className={styles.umiejtnoci1}>Umiejętności</div>
              <div className={styles.rozwi1}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MjProfil;
