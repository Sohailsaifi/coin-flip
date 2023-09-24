import { support, bggradient } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Support = () => (
  <section id="support" className={`${layout.section} ml-6`}>
    <div className={layout.sectionImg}>
      <img src={support} alt="billing" className="w-[50%] h-[70%] z-[1]" />
      <img src={bggradient} alt="bggradient" className="w-[500%] h-[170%] absolute left-[-30%] brightness-75" />
    </div>
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        24/7 access to full <br className="sm:block hidden" /> service customer <br className="sm:block hidden" /> support
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We're here for you around the clock, providing full-service customer support whenever you need it. Your satisfaction is our priority.
      </p>

      <Button styles={`sign-in-button mt-10 z-[1]`} text={'Get Started'} />
    </div>

  </section>
);

export default Support;
