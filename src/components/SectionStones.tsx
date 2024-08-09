import { FunctionComponent } from "react";
import styles from "./SectionStones.module.css";
import { Link } from "react-router-dom";

export type SectionStonesType = {
  className?: string;
};

const SectionStones: FunctionComponent<SectionStonesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionStones, className].join(" ")}>
      <div className={styles.sidecol}>
        <div className={styles.stones1Parent}>
          <img
            className={styles.stones1Icon}
            loading="lazy"
            alt=""
            src="/stones-1@2x.png"
          />
          <div className={styles.grad} />
        </div>
      </div>
      <div className={styles.containerWithsidecol}>
        <div className={styles.texts}>
          <div className={styles.headings}>
            <h1 className={styles.people}>PEOPLE</h1>
            <h3
              className={styles.manyPeopleHave}
            >{`Many people have explored the space to get new information on space `}</h3>
          </div>
          <div className={styles.description}>
            Space exploration is a cornerstone of human progress. It fuels
            scientific discovery, expanding our understanding of the universe
            and our place within it. By pushing technological boundaries, space
            missions develop innovations that benefit life on Earth, from
            medical advancements to communication systems. Moreover, exploring
            space inspires future generations, fostering a culture of curiosity
            and innovation. As our planet faces challenges, space exploration
            may provide solutions, such as finding new resources or developing
            strategies to protect Earth from threats like asteroids. Ultimately,
            it's an investment in our collective future.
          </div>
        </div>
      </div>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.stonecarousel}>
            <Link to="https://en.wikipedia.org/wiki/Neil_Armstrong">
              <img
                className={styles.stonecarouselitem2Icon}
                loading="lazy"
                alt=""
                src="/stonecarouselitem2@2x.png"
              />
            </Link>
            <Link to="https://en.wikipedia.org/wiki/Valentina_Tereshkova">
              <img
                className={styles.stonecarouselitem2Icon}
                loading="lazy"
                alt=""
                src="/stonecarouselitem3@2x.png"
              />
            </Link>
            <Link to="https://en.wikipedia.org/wiki/Ham_(chimpanzee)">
              <img
                className={styles.stonecarouselitem2Icon}
                loading="lazy"
                alt=""
                src="/stonecarouselitem4@2x.png"
              />
            </Link>
            <Link to="https://en.wikipedia.org/wiki/Gus_Grissom">
              <img
                className={styles.stonecarouselitem2Icon}
                loading="lazy"
                alt=""
                src="/stonecarouselitem5@2x.png"
              />
            </Link>
            <Link to="https://en.wikipedia.org/wiki/John_Glenn">
              <img
                className={styles.stonecarouselitem2Icon}
                alt=""
                src="/stonecarouselitem6@2x.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionStones;
