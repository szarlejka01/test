import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomeForm.module.css";

const WelcomeForm = () => {
  const navigate = useNavigate();

  const onButtonsLogin1Click = useCallback(() => {
    navigate("/mojecv-wszystkie");
  }, [navigate]);

  return (
    <div className={styles.content}>
      <div className={styles.witajPonownie}>Witaj ponownie!</div>
      <form className={styles.danelogowania} method="post">
        <input className={styles.inputs} type="text" />
        <input className={styles.inputs} type="text" />
        <button className={styles.buttonsLogin} onClick={onButtonsLogin1Click}>
          <div className={styles.zalogujSi}>Zaloguj się</div>
        </button>
      </form>
      <div className={styles.niePamitaszHasa}>{`Nie pamiętasz hasła? `}</div>
      <div className={styles.opcjelogowania}>
        <div className={styles.loginwith}>
          <img className={styles.icon} alt="" src="/124010-1@2x.png" />
        </div>
        <div className={styles.loginwith1}>
          <img
            className={styles.gmailIcon20201}
            alt=""
            src="/gmail-icon-2020-1@2x.png"
          />
        </div>
        <div className={styles.loginwith1}>
          <img
            className={styles.gmailIcon20201}
            alt=""
            src="/5968866-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
