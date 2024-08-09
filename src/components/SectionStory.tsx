import { FunctionComponent } from "react";
import styles from "./SectionStory.module.css";

export type SectionStoryType = {
  className?: string;
};

const SectionStory: FunctionComponent<SectionStoryType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionStory, className].join(" ")}>
      <div className={styles.storyContent}>
        <div className={styles.container}>
          <div className={styles.texts}>
            <div className={styles.storysectionheading}>
              <h1 className={styles.story}>STORY</h1>
              <h3 className={styles.theCosmosOf}>
                The Cosmos of Space sacrifices
              </h3>
            </div>
            <div className={styles.storysectiondescription}>
              Born beneath a digital cosmos, they cradle stardust dreams. No
              longer distant, stars are their playgrounds. Mars is a backyard,
              the moon a stepping stone. Their lullabies are rocket launches,
              their heroes, space-faring pioneers. A generation unbound by
              gravity, their future orbits beyond the blue marble.
            </div>
          </div>
          <div className={styles.absoluteillusts}>
            <img className={styles.tarot11Icon} alt="" src="/tarot11@2x.png" />
            <img className={styles.tarot2Icon} alt="" src="/tarot2@2x.png" />
            <img
              className={styles.mainillustIcon}
              loading="lazy"
              alt=""
              src="/mainillust@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.absolutebottomgradient} />
    </div>
  );
};

export default SectionStory;
