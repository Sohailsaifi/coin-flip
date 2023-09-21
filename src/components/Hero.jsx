import styles from "../style";
import {   bitcoin, etherium, litecoin, monero, sphere, sphere2, sphere3, star, star1, star2, star3 } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 relative `}>


        {/* <span className="orbit h-[200px] w-[500px] sm:h-[514.986px] sm:w-[1187px] absolute left-[5%]"></span> */}

        <img src={sphere} alt="sphere" className="absolute w-[40px] sm:w-[97px] z-[1] "  /> 
        
        
        
        {/* <img src={star} alt="star" className="absolute hidden sm:block star-img"  />  */}
         
        
        

        <span className="orbit h-[80px] w-[200px] sm:h-[200.064px] sm:w-[800.984px] absolute ">
        </span>

        <span className="orbit h-[200px] w-[500px] sm:h-[514px] sm:w-[1187px] absolute">
          <img src={bitcoin} alt="bitcoin" className="absolute w-[100px] sm:w-[180px] z-[1] -top-[20%] right-[15%] sm:top-[25%] sm:-left-[6%]"/> 
          <img src={litecoin} alt="litecoin" className="hidden sm:block absolute z-[1] sm:bottom-[9%] sm:right-[0%]"/> 
          <img src={star3} alt="star3" className="absolute z-[1] w-[40px] sm:w-[60px] -bottom-[80%] left-[25%] sm:bottom-[20%] sm:left-[10%]"/> 
        </span>

        <span className="orbit h-[400px] w-[800px] sm:h-[748px] sm:w-[1724px] absolute">
          <img src={sphere3} alt="sphere3" className="hidden sm:block absolute  z-[1] top-[5%] right-[4%]"/> 
          <img src={etherium} alt="etherium" className="absolute w-[120px] -bottom-[10%] right-[20%] sm:w-[180px] sm:-top-[8%] sm:right-[25%]"/>
          <img src={monero} alt="monero" className="absolute z-[1] w-[100px] sm:w-[150px] bottom-[22%] left-[22%] sm:bottom-[0%] sm:left-[15%]"/> 
          <img src={star1} alt="star1" className="absolute w-[40px] sm:w-[60px] -top-[20%] right-[35%] sm:top-[0%] sm:right-[18%]"/>
          <img src={star2} alt="star2" className="hidden sm:block absolute z-[1] right-[9%] bottom-[50%]"/> 
        </span>

        <span className="orbit h-[600px] w-[1000px] sm:h-[1032px] sm:w-[2378px] absolute"></span>



        <div className="flex flex-row justify-between items-center z-[1]">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            We make crypto <br />
            clear and simple
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-16 z-[1]`}>
          Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level
        </p>
        <Button styles={`get-started-button mt-28 sm:mt-32 z-[1]`} text={'Get Started'} />
      </div>
    </section>
  );
};

export default Hero;
