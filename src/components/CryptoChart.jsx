import { bggreen, chart } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="buy-sell" className={`flex md:flex-row flex-col ${styles.paddingY} mb-[60px]`}>
    <div className={`sm:flex flex-1 justify-center items-center flex-col xl:px-0 md:px-16 px-6 relative`}>

        <img src={bggreen} className="absolute right-[-60%] brightness-75" alt=""/>

        <h2 className={`${styles.heading2} flex-1 sm:text-center z-[1]`}>
          Buy and sell with the lowest<br />
          fees in the industry
        </h2>
        <p className={`${styles.paragraph} max-w-[670px] mt-4 sm:text-center z-[1]`}>
          Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.
        </p>

        <button className="font-poppins font-normal info-button mb-20 mt-10">Learn More <span className="arrow">&rarr;</span></button>        

        <img src={chart} alt="" className="hidden sm:block z-[1]"/>
    </div>
  </section>
);

export default Billing;
