import { bgimg } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => (
  <section id="business" className={`flex md:flex-row flex-col ${styles.paddingY} mb-[60px]`}>
    <div className={`sm:flex flex-1 justify-center items-center flex-col xl:px-0 md:px-16 px-6 relative`}>
      <img src={bgimg} className="brighten absolute right-[-40%]" alt=""/>

        <h2 className={`${styles.heading2} sm:text-center z-[1]`}>
          A crypto investment platform <br />
          that invests in you
        </h2>
        <p className={`${styles.paragraph} max-w-[670px] mt-4 sm:text-center z-[1]`}>
          We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.
        </p>

        <Button styles={`get-started-button mt-16 md:mt-16 z-[1]`} text={'Get Started'} />
        
    </div>
  </section>
);

export default Business;
