import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={`${layout.section} justify-center`}>
    <div className="sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow text-white mr-10 p-10 w-25">
      <h4>Trade Desk</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum enim unde labore esse deleniti quod voluptates iusto optio laborum obcaecati nisi corporis repudiandae accusantium, at modi inventore id voluptatem?</p>
    </div>
    <div className="sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow text-white p-10">
      <h4>Trade Desk</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum enim unde labore esse deleniti quod voluptates iusto optio laborum obcaecati nisi corporis repudiandae accusantium, at modi inventore id voluptatem?</p>
    </div>
    <div className="sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow text-white ml-10 p-10">
      <h4>Trade Desk</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum enim unde labore esse deleniti quod voluptates iusto optio laborum obcaecati nisi corporis repudiandae accusantium, at modi inventore id voluptatem?</p>
    </div>
  </section>
);

export default Business;
