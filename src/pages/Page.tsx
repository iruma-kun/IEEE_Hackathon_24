import { FunctionComponent } from "react";
import Header from "../components/Header";
import SectionStory from "../components/SectionStory";
import SectionGuardian from "../components/SectionGuardian";
import SectionMission from "../components/SectionMission";
import FrameComponent2 from "../components/FrameComponent2";
import SectionStones from "../components/SectionStones";
import styles from "./Page.module.css";

const Page: FunctionComponent = () => {
  return (
    <div className={styles.page}>
      <div className={styles.bg1Wrapper}>
        <img className={styles.bg1Icon} alt="" src="/bg1@2x.png" />
      </div>
      <div className={styles.headerParent}>
        <Header />
        <SectionStory />
      </div>
      <div className={styles.sectionGuardianWrapper}>
        <SectionGuardian />
      </div>
      <div className={styles.bg2Wrapper}>
        <img className={styles.bg1Icon} alt="" src="/bg1@2x.png" />
      </div>
      <footer className={styles.bottomgrad} />
      <div className={styles.frameParent}>
        <div className={styles.sectionMissionParent}>
          <SectionMission />
          <FrameComponent2 />
          <SectionStones />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.picParent}>
            <img
              className={styles.picIcon}
              loading="lazy"
              alt=""
              src="/pic@2x.png"
            />
            <div className={styles.futureEndeavoursParent}>
              <h1 className={styles.futureEndeavours}>Future endeavours</h1>
              <div className={styles.weWillTryContainer}>
                <p className={styles.weWillTry}>
                  We will try to integrate more games and interactive websites
                  to engage more
                </p>
                <p className={styles.peopleInThe}>
                  {" "}
                  people in the website so that more people are able to know
                  what is happening in the space what has already happened
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.bg3Wrapper}>
        <img className={styles.bg1Icon} alt="" src="/bg1@2x.png" />
      </main>
      <div className={styles.footer}>
        <div className={styles.appleCiderAll}>
          © 2024 Apple Cider. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;
