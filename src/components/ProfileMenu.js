import styles from "./ProfileMenu.module.css";

const ProfileMenu = ({ onMojeCV1Click }) => {
  return (
    <div className={styles.menuGwne}>
      <div className={styles.menuGwneMp}>
        <img className={styles.mjProfilIcon} alt="" src="/mj-profil.svg" />
        <div className={styles.mjProfil}>Mój profil</div>
        <img
          className={styles.mojeListyMotywacyjne}
          alt=""
          src="/moje-listy-motywacyjne.svg"
        />
        <div className={styles.mojeListyMotywacyjneContainer}>
          <p className={styles.mojeListyMotywacyjne1}>Moje listy motywacyjne</p>
        </div>
        <img className={styles.mojeCvIcon} alt="" src="/moje-cv.svg" />
        <button className={styles.mojeCv} onClick={onMojeCV1Click}>
          Moje CV
        </button>
        <img
          className={styles.zdjcieUytkownikaIcon}
          alt=""
          src="/zdjcie-uytkownika@2x.png"
        />
      </div>
      <div className={styles.informacjeKontakowe}>
        <div className={styles.informacjeKontaktowe}>Informacje kontaktowe</div>
        <div className={styles.imiParent}>
          <input className={styles.imi} type="text" placeholder="Imię" />
          <input
            className={styles.nazwisko}
            type="text"
            placeholder="Nazwisko"
          />
        </div>
        <input
          className={styles.nrtelefonu}
          type="text"
          placeholder="Numer telefonu"
        />
        <input className={styles.eMail} type="text" placeholder="E-mail" />
      </div>
    </div>
  );
};

export default ProfileMenu;
