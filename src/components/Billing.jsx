import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={`${layout.flexCenter} justify-between`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <h2 className={`${styles.heading2} flex-1`}>
        A crypto investment platform <br />
        that invests in you
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-16 relative`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
    </div>
  </section>
);

export default Billing;
