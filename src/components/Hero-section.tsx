import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../assets/images/bg-slider-12.jpg";
import { useEffect, useState } from "react";
const Hero = () => {

  const [test, setTest] = useState<number | string>(null);


  useEffect(() => {
    setTest("Hello");
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${img1})` }}>
      <div className="hero-text">
        {test}
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
