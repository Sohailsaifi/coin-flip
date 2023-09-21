import styles from "../style";
import {   bitcoin, etherium, litecoin, monero, sphere, sphere2, sphere3, star, star1, star2, star3 } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 md:px-16 px-6 relative `}>


        {/* <span className="orbit h-[200px] w-[500px] md:h-[514.986px] md:w-[1187px] absolute left-[5%]"></span> */}

        <img src={sphere} alt="sphere" className="absolute w-[40px] md:w-[97px] z-[1] "  /> 
        
        
        
        {/* <img src={star} alt="star" className="absolute hidden md:block star-img"  />  */}
         
        
        

        <span className="orbit h-[80px] w-[200px] md:h-[200.064px] md:w-[800.984px] absolute ">
        </span>

        <span className="orbit h-[200px] w-[500px] md:h-[514px] md:w-[1187px] absolute">
          <img src={bitcoin} alt="bitcoin" className="absolute w-[100px] md:w-[180px] z-[1] -top-[20%] right-[15%] ss:top-[30%] ss:-left-[40%] md:top-[25%] md:-left-[6%]"/> 
          <img src={litecoin} alt="litecoin" className="hidden sm:block absolute z-[1] sm:bottom-[9%] sm:-right-[45%] md:bottom-[9%] md:right-[0%]"/> 
          <img src={star3} alt="star3" className="absolute z-[1] w-[40px] md:w-[60px] -bottom-[80%] left-[25%] md:bottom-[20%] md:left-[10%]"/> 
        </span>

        <span className="orbit h-[400px] w-[800px] md:h-[748px] md:w-[1724px] absolute">
          <img src={sphere3} alt="sphere3" className="hidden xs:block ss:hidden md:block absolute  z-[1] xs:top-[80%] xs:-right-[10%] md:top-[5%] md:right-[4%]"/> 
          <img src={etherium} alt="etherium" className="absolute w-[120px] -bottom-[10%] right-[20%] md:w-[180px] xs:-top-[20%] xs:right-[2%] sm:-top-[20%] sm:right-[2%] md:-top-[8%] md:right-[25%]"/>
          <img src={monero} alt="monero" className="absolute z-[1] w-[100px] xs:hidden md:block md:w-[150px] bottom-[22%] left-[22%] md:bottom-[0%] md:left-[15%]"/> 
          <img src={star1} alt="star1" className="absolute w-[40px] md:w-[60px] -top-[20%] right-[35%] md:top-[0%] md:right-[18%]"/>
          <img src={star2} alt="star2" className="hidden md:block absolute z-[1] right-[9%] bottom-[50%]"/> 
        </span>

        <span className="orbit h-[600px] w-[1000px] md:h-[1032px] md:w-[2378px] absolute"></span>



        <div className="flex flex-row justify-between items-center z-[1]">
          <h1 className="flex-1 font-poppins font-semibold xs:text-[72px] text-[52px] text-white xs:leading-[100.8px] leading-[75px]">
            We make <br className="hidden ss:block sm:hidden"/> crypto <br/>
            clear and <br className="hidden ss:block sm:hidden"/>simple
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] ss:max-w-[360px] sm:max-w-[470px] mt-16 z-[1]`}>
          Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level
        </p>
        <Button styles={`get-started-button mt-28 md:mt-32 z-[1]`} text={'Get Started'} />
      </div>
    </section>
  );
};

export default Hero;
