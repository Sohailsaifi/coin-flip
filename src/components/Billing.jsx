import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={`flex md:flex-row flex-col ${styles.paddingY} mb-[60px]`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 md:px-16 px-6 relative `}>

        <h2 className={`${styles.heading2} flex-1 text-center`}>
          A crypto investment platform <br />
          that invests in you
        </h2>
        <p className={`${styles.paragraph} max-w-[670px] mt-4 text-center`}>
          We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.
        </p>

        <Button styles={`get-started-button mt-28 md:mt-16 z-[1]`} text={'Get Started'} />
        
    </div>
  </section>
);

export default Billing;
