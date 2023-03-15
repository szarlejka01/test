import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainMenuContainer.module.css";

const MainMenuContainer = () => {
  const navigate = useNavigate();

  const onMjProfil1Click = useCallback(() => {
    navigate("/mjprofil");
  }, [navigate]);

  return (
    <div className={styles.menuGwneCv}>
      <img className={styles.mjProfilIcon} alt="" src="/mj-profil2.svg" />
      <button className={styles.mjProfil} onClick={onMjProfil1Click}>
        Mój profil
      </button>
      <img
        className={styles.mojeListyMotywacyjne}
        alt=""
        src="/moje-listy-motywacyjne2.svg"
      />
      <button className={styles.mojeListyMotywacyjneContainer}>
        <p className={styles.mojeListyMotywacyjne1}>Moje listy motywacyjne</p>
      </button>
      <img className={styles.mojeCvIcon} alt="" src="/moje-cv2.svg" />
      <div className={styles.mojeCv}>Moje CV</div>
      <img
        className={styles.zdjcieUytkownikaIcon}
        alt=""
        src="/zdjcie-uytkownika@2x.png"
      />
    </div>
  );
};

export default MainMenuContainer;
