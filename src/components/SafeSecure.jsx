import { suitcase, bgpurple } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="grow" className={`${layout.section} ml-6`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Take your first step <br className="sm:block hidden" /> in safe, secure <br className="sm:block hidden" /> crypto investing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Discover a world of opportunities to grow your wealth while we prioritize your security and peace of mind throughout your crypto journey. Join us today and embark on your path to financial success.
      </p>

      <Button styles={`get-started-button mt-10 z-[1]`} text={'Get Started'} />
    </div>

    <div className={layout.sectionImg}>
      <img src={bgpurple} className="absolute w-[200%] right-[-20%]" alt=""/>
      <img src={suitcase} alt="billing" className="w-[100%] h-[100%] z-[1]" />
    </div>
  </section>
);

export default CardDeal;
