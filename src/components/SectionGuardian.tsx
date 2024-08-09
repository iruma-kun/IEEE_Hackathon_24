import { FunctionComponent } from "react";
import styles from "./SectionGuardian.module.css";

export type SectionGuardianType = {
  className?: string;
};

const SectionGuardian: FunctionComponent<SectionGuardianType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionGuardian, className].join(" ")}>
      <div className={styles.container}>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <div className={styles.rightcol}>
          <h2 className={styles.laikaTheFirst}>
            Laika: The First Dog in Space
          </h2>
          <div className={styles.laikaAStray}>
            Laika, a stray Moscow dog, became the first animal to orbit Earth
            aboard Sputnik 2 in 1957. Her mission was a crucial step for human
            spaceflight, providing data on living organisms in space. Sadly, she
            died within hours of launch due to overheating, despite initial
            plans for euthanasia. Laika's sacrifice remains a poignant reminder
            of the early days of space exploration.
          </div>
        </div>
      </div>
      <img
        className={styles.shootingstarsIcon}
        loading="lazy"
        alt=""
        src="/shootingstars@2x.png"
      />
      <div className={styles.decowaves}>
        <div className={styles.storywave1}>
          <img className={styles.wavevectorIcon} alt="" src="/wavevector.svg" />
        </div>
        <div className={styles.storywave2}>
          <img
            className={styles.wavevectorIcon}
            alt=""
            src="/wavevector-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionGuardian;
