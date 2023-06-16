import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footerbox">
        <div className="Footer1">
          <h1>
            Care for Your Skin,
            <br /> Care for Your Beauty
          </h1>
          <p>
            Smile with the reflection of the glow. Let your Skin define <br />
            your age and not the years
          </p>
          <a>
            Find a store <BsArrowRightShort />
          </a>
        </div>
        <div className="list">
          <ul>
            <li>Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Store Locations</li>
            <li>Our Blog</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>Useful links</li>
            <li>New Products</li>
            <li>Best Sellers</li>
            <li>Bundle & Save</li>
            <li>Online Gift Card</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>Information</li>
            <li>Start a Return</li>
            <li>Contact Us</li>
            <li>Shipping FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="FooterLastLine">
        <div>
          &#169; Glowing 2021 <AiOutlineTwitter /> <FaFacebookF />
          <AiFillYoutube />
          <AiOutlineInstagram />
        </div>
        <h1>GLOWING</h1>
      </div>
    </div>
  );
};

export default Footer;
