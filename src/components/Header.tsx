import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerleftcol} />
      <div className={styles.headerrightcol}>
        <nav className={styles.headergnav}>
          <div className={styles.story}>STORY</div>
          <div className={styles.mission}>MISSION</div>
          <div className={styles.space}>SPACE</div>
          <div className={styles.people}>PEOPLE</div>
          <div className={styles.spaceships}>SPACESHIPS</div>
        </nav>
        <button className={styles.headerplaynowbtn}>
          <a href="https://mapoftheuniverse.net">
            <div className={styles.playnowbtntxt}>EXPLORE</div>
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
