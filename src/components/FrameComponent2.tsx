import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionTarotWrapper, className].join(" ")}>
      <div className={styles.sectionTarot}>
        <div className={styles.containerWithsidecol}>
          <div className={styles.texts}>
            <div className={styles.headings}>
              <h1 className={styles.space}>SPACE</h1>
              <h3 className={styles.yourAppearanceIn}>
                Your appearance in this world
              </h3>
            </div>
            <div className={styles.allLifeForms}>
              All life forms in this world are expressed as tarot. The first
              card your Guardian chooses for you determines who you are in this
              world. As you continue your journey, you will be able to obtain
              tarot cards that will help you. Recruit characters with unique
              personalities and abilities and conquer this world.
            </div>
          </div>
          <div className={styles.tarotspart}>
            <div className={styles.tarotsitems}>
              <img
                className={styles.tarot11Icon}
                loading="lazy"
                alt=""
                src="/tarot11-1@2x.png"
              />
              <img
                className={styles.tarot1Icon}
                loading="lazy"
                alt=""
                src="/tarot1@2x.png"
              />
              <img
                className={styles.tarot2Icon}
                loading="lazy"
                alt=""
                src="/tarot2-1@2x.png"
              />
            </div>
            <div className={styles.tarotcarouselcontrollers}>
              <img
                className={styles.tarotcarouselcontrollerprevIcon}
                loading="lazy"
                alt=""
                src="/tarotcarouselcontrollerprev@2x.png"
              />
              <b className={styles.index1}>01</b>
              <div className={styles.tarotcarouselcontrollernext}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.shootingstarsIcon}
          alt=""
          src="/shootingstars-1@2x.png"
        />
        <div className={styles.decowaves}>
          <div className={styles.storywave1}>
            <img
              className={styles.wavevectorIcon}
              alt=""
              src="/wavevector.svg"
            />
          </div>
          <div className={styles.storywave2}>
            <img
              className={styles.wavevectorIcon}
              alt=""
              src="/wavevector-1.svg"
            />
          </div>
        </div>
        <div className={styles.sidecol}>
          <img
            className={styles.tarotsidecardinfoIcon}
            rows={15}
            cols={17}
            alt=""
            src="/tarotsidecardinfo@2x.png"
          />
          <img
            className={styles.tarotsidecardinfoIcon1}
            rows={13}
            cols={17}
            alt=""
            src="/tarotsidecardinfo1@2x.png"
          />
          <img
            className={styles.tarotsidecardinfoIcon2}
            rows={14}
            cols={17}
            alt=""
            src="/tarotsidecardinfo2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
