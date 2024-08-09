import { FunctionComponent } from "react";
import styles from "./Cover.module.css";

const Cover: FunctionComponent = () => {
  return (
    <div className={styles.cover}>
      <h3 className={styles.spaceMartyrs}>space martyrs</h3>
      <div className={styles.v001Parent}>
        <div className={styles.v001}>v1.0.0</div>
        <div className={styles.textWrapper}>
          <div className={styles.frameChild}>Group 3</div>
        </div>
      </div>
      <main className={styles.bgParent}>
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <div className={styles.illusts}>
          <img className={styles.tarot2Icon} alt="" src="/tarot2@2x.png" />
          <img className={styles.tarot1Icon} alt="" src="/tarot1@2x.png" />
          <img
            className={styles.mainillustIcon}
            loading="lazy"
            alt=""
            src="/mainillust@2x.png"
          />
        </div>
      </main>
    </div>
  );
};

export default Cover;
