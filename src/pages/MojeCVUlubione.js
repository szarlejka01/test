import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MojeCVUlubione.module.css";

const MojeCVUlubione = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/mojecv-wszystkie");
  }, [navigate]);

  return (
    <div className={styles.mojecvUlubione}>
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
      <div className={styles.content}>
        <div className={styles.menuGwneCv}>
          <img className={styles.mjProfilIcon} alt="" src="/mj-profil1.svg" />
          <div className={styles.mjProfil}>Mój profil</div>
          <img
            className={styles.mojeListyMotywacyjne}
            alt=""
            src="/moje-listy-motywacyjne1.svg"
          />
          <div className={styles.mojeListyMotywacyjneContainer}>
            <p className={styles.mojeListyMotywacyjne1}>
              Moje listy motywacyjne
            </p>
          </div>
          <img className={styles.mojeCvIcon} alt="" src="/moje-cv1.svg" />
          <div className={styles.mojeCv}>Moje CV</div>
          <img
            className={styles.zdjcieUytkownikaIcon}
            alt=""
            src="/zdjcie-uytkownika1@2x.png"
          />
        </div>
        <div className={styles.przecznikUlubione}>
          <button className={styles.button} onClick={onButtonClick}>
            
          </button>
          <div className={styles.wrapper}>
            <div className={styles.div3}></div>
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
    </div>
  );
};

export default MojeCVUlubione;
