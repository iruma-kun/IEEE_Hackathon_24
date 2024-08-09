import { FunctionComponent } from "react";
import styles from "./SectionMission.module.css";

export type SectionMissionType = {
  className?: string;
};

const SectionMission: FunctionComponent<SectionMissionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionMission, className].join(" ")}>
      <div className={styles.containerWithsidecol}>
        <div className={styles.texts}>
          <div className={styles.headings}>
            <h1 className={styles.spaceTimeline}>Space Timeline</h1>
            <h3 className={styles.findOutAbout}>
              Find out about the interesting past hidden in this space
            </h3>
          </div>
          <div className={styles.laikaASovietContainer}>
            <p className={styles.laikaASoviet}>
              Laika, a Soviet space dog, became the first living creature to
              orbit the Earth in 1957, aboard Sputnik 2. Her mission and
              sacrifice paved the way for human spaceflight. Other pioneers
              include:
            </p>
            <ul className={styles.yuriGagarinTheFirstHuman}>
              <li className={styles.yuriGagarinThe}>
                Yuri Gagarin, the first human in space (1961)
              </li>
              <li className={styles.yuriGagarinThe}>
                Valentina Tereshkova, the first woman in space (1963)
              </li>
              <li className={styles.yuriGagarinThe}>
                Enos, the first chimpanzee in orbit (1962)
              </li>
              <li className={styles.yuriGagarinThe}>
                Spiders, worms, and insects, which have contributed to
                scientific research in microgravity
              </li>
              <li className={styles.yuriGagarinThe}>
                Ham, the first primate to survive spaceflight (1961)
              </li>
            </ul>
            <p className={styles.laikaASoviet}>
              These courageous individuals have greatly advanced our
              understanding of space and its effects on living beings, enabling
              humans to explore and venture further into the cosmos.
            </p>
          </div>
        </div>
        <div className={styles.missionillust}>
          <div className={styles.bg}>
            <div className={styles.decowaves}>
              <div className={styles.storywave1}>
                <img
                  className={styles.wavevectorIcon}
                  alt=""
                  src="/wavevector-2.svg"
                />
              </div>
              <div className={styles.storywave2}>
                <img
                  className={styles.wavevectorIcon}
                  alt=""
                  src="/wavevector-3.svg"
                />
              </div>
            </div>
            <div className={styles.bgpicParent}>
              <img className={styles.bgpicIcon} alt="" src="/bgpic@2x.png" />
              <img
                className={styles.decotriIcon}
                loading="lazy"
                alt=""
                src="/decotri.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidecolWrapper}>
        <div className={styles.sidecol}>
          <img
            className={styles.hollineIcon}
            loading="lazy"
            alt=""
            src="/holline.svg"
          />
          <img className={styles.varlineIcon} alt="" src="/varline.svg" />
          <img
            className={styles.spaceTimelineRemovebg1Icon}
            loading="lazy"
            alt=""
            src="/space-timelineremovebg-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionMission;
