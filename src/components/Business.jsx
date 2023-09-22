import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content,  bttn }) => (
  <div className="box-shadow text-white info-block z-[1]">
    <img src={icon} alt=""  className="w-[70px]"/>
    <h1 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 info-block-heading">{title}</h1>
    <p className="font-poppins font-normal text-dimWhite text-[13px] leading-[24px] text-center">{content}</p>
    <button className="font-poppins font-normal info-button">{bttn} <span className="arrow">&rarr;</span></button>
  </div>
);

const Business = () =>  (
  <section id="features" className={`${layout.section} justify-center`}>
    {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
  </section>
);

export default Business;
