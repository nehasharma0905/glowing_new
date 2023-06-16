import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../assets/images/bg-slider-12.jpg";
const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${img1})` }}>
      <div className="hero-text">
        <p>Get the glow</p>
        <h1>
          Love Your
          <br /> Skin Natutally
        </h1>
        <a>
          Discover now <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Hero;
