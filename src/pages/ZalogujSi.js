import WelcomeForm from "../components/WelcomeForm";
import styles from "./ZalogujSi.module.css";

const ZalogujSi = () => {
  return (
    <div className={styles.zalogujSi}>
      <div className={styles.lewasekcja}>
        <div className={styles.extendedCv}>EXTENDED-CV</div>
        <div className={styles.content}>
          <div className={styles.nieMaszKonta}>
            <div className={styles.ikona}></div>
            <div className={styles.nieMaszJeszcze}>Nie masz jeszcze konta?</div>
            <div className={styles.buttonsLogin}>
              <div className={styles.zarejestrujSi}>Zarejestruj się</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.prawasekcja}>
        <div className={styles.logowanie}>
          <WelcomeForm />
          <div className={styles.zarejestrujsi}>
            <div className={styles.nieMaszJeszcze1}>
              Nie masz jeszcze konta?
            </div>
            <div className={styles.buttonsLogin1}>
              <div className={styles.zarejestrujSi}>Zarejestruj się</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZalogujSi;
